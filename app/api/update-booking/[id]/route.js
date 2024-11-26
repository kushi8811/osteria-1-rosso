import nodemailer from "nodemailer";
import { supabase } from "@/app/utils/supabaseClient.js";
import { NextResponse } from "next/server";

const GMAIL_APP_PASSWORD = "pmzxitnhtksyybym";
const BUSINESS_EMAIL = "osteriaunorosso@gmail.com";
const GMAIL_USER = "osteriaunorosso@gmail.com";
export async function GET(req, { params }) {
  try {
    const { id } = await params;

    const status = req.nextUrl.searchParams.get("status");

    if (!["accepted", "rejected"].includes(status)) {
      return new NextResponse("Invalid status.", { status: 400 });
    }

    const sanitizedId = id.trim();

    const { data: updatedBooking, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("id", sanitizedId);

    if (error) {
      return new NextResponse("Failed to update booking status.", {
        status: 500,
      });
    }

    if (!updatedBooking || updatedBooking.length === 0) {
      return new NextResponse("Booking not found.", { status: 404 });
    }

    const { email, name, date, time, guests } = updatedBooking[0];

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
      text: `Dear ${name},\n\nYour booking has been ${
        status === "accepted" ? "confirmed" : "rejected"
      }.
      Your reservation details : 
      Name: ${name},
      Date: ${date},
      Time:${time},
      Guests:${guests}
       \n\nThank you for choosing us!
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Confirmation email sent:", info.response);
      }
    });

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
