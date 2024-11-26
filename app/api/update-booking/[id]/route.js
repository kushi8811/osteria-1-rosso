import nodemailer from "nodemailer";
import { supabase } from "@/app/utils/supabaseClient.js";
import { NextResponse } from "next/server";
const GMAIL_APP_PASSWORD = "pmzxitnhtksyybym";
const BUSINESS_EMAIL = "osteriaunorosso@gmail.com";
const GMAIL_USER = "osteriaunorosso@gmail.com";

export async function GET(req, { params }) {
  try {
    const { id } = await params;

    if (!id || typeof id !== "string") {
      return new NextResponse("Invalid booking ID.", { status: 400 });
    }

    const status = req.nextUrl.searchParams.get("status");
    if (!["accepted", "rejected"].includes(status)) {
      return new NextResponse("Invalid status.", { status: 400 });
    }

    const sanitizedId = id.trim();

    const { data: updatedBooking, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("id", sanitizedId)
      .single();

    if (error) {
      return new NextResponse("Failed to retrieve booking details.", {
        status: 500,
      });
    }

    if (!updatedBooking) {
      return new NextResponse("Booking not found.", { status: 404 });
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
      text: `Dear ${name},\n\nYour booking has been ${status}.\n\nReservation Details:\n- Name: ${name}\n- Date: ${date}\n- Time: ${time}\n- Guests: ${guests}\n\nThank you for choosing Osteria Un Rosso!`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent to user:", email);

    return new NextResponse(
      JSON.stringify({
        message: `Booking ${status} successfully! Confirmation sent to user.`,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new NextResponse("Error processing your request.", { status: 500 });
  }
}
