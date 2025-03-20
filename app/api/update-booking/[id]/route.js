import nodemailer from "nodemailer";
import { supabase } from "@/app/utils/supabaseClient.js";
import { NextResponse } from "next/server";

const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL;
const GMAIL_USER = process.env.GMAIL_USER;

export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id || typeof id !== "string") {
      return new NextResponse("Invalid booking ID.", { status: 400 });
    }

    const status = request.nextUrl.searchParams.get("status");
    if (!["accepted", "rejected"].includes(status)) {
      return new NextResponse("Invalid status.", { status: 400 });
    }

    const sanitizedId = id.trim();

    const { data: updatedBooking, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("id", sanitizedId)
      .single();

    if (error || !updatedBooking) {
      return new NextResponse("Booking not found or failed to retrieve.", {
        status: 404,
      });
    }

    const { email, name, date, time, guests } = updatedBooking;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: BUSINESS_EMAIL,
      to: email,
      subject: `Booking ${
        status === "accepted" ? "Confirmed" : "Rejected"
      } - Osteria Un Rosso`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <h2 style="color: #d35400;">Dear ${name},</h2>
          <p>We are writing to inform you that your booking has been <strong>${status}</strong>.</p>
          <p><strong>Reservation Details:</strong></p>
          <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name:</td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Date:</td><td style="padding: 8px; border: 1px solid #ddd;">${date}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Time:</td><td style="padding: 8px; border: 1px solid #ddd;">${time}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Guests:</td><td style="padding: 8px; border: 1px solid #ddd;">${guests}</td></tr>
          </table>
          <p>Thank you for choosing <strong>Osteria Un Rosso</strong>! We look forward to welcoming you soon.</p>
          <p>If you have any questions or need further assistance, don't hesitate to contact us.</p>
          <p style="font-size: 0.9em; color: #777;">Best regards,<br>The Osteria Un Rosso Team</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent to:", email);

    return new NextResponse(
      JSON.stringify({
        message: `Booking ${status} successfully updated! Confirmation sent to user.`,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new NextResponse("Error processing your request.", { status: 500 });
  }
}
