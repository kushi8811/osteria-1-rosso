import { supabase } from "@/app/utils/supabaseClient";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
const GMAIL_APP_PASSWORD = "pccirnkyevnwzeox";
const BUSINESS_EMAIL = "osteriaunorosso@gmail.com";
const GMAIL_USER = "osteriaunorosso@gmail.com";

export async function POST(req) {
  try {
    const formData = await req.json();

    const uniqueBookingId = uuidv4();

    const { data, error } = await supabase.from("bookings").insert([
      {
        id: uniqueBookingId,
        name: formData.name,
        email: formData.email,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        specialRequest: formData.specialRequest || "",
        status: "pending",
      },
    ]);
    if (error) {
      return new Response("Failed to save booking.", { status: 500 });
    }

    const emailText = `
      <p>A new booking request has been received. Please review the booking details below:</p>
      <ul>
        <li><strong>Name:</strong> ${formData.name}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Date:</strong> ${formData.date}</li>
        <li><strong>Time:</strong> ${formData.time}</li>
        <li><strong>Guests:</strong> ${formData.guests}</li>
        <li><strong>Special Request:</strong> ${
          formData.specialRequest || "None"
        }</li>
      </ul>
      <p>To approve or reject this booking, click one of the following links:</p>
      <p>
        <a href="https://osteria1rosso.it.com/api/update-booking/${uniqueBookingId}?status=accepted">Accept Booking</a>
      </p>
      <p>
        <a href="https://osteria1rosso.it.com/api/update-booking/${uniqueBookingId}?status=rejected">Reject Booking</a>
      </p>
    `;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // Secure SMTP port
      secure: true, // Use SSL
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: GMAIL_USER,
      to: BUSINESS_EMAIL,
      subject: "New Booking Request - Osteria Un Rosso",
      html: emailText,
    };

    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent to user:1", formData.email);
    return new Response(
      JSON.stringify({ message: "Booking saved and manager notified!", data }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting booking:", error);
    return new Response("Failed to submit booking request.", { status: 500 });
  }
}
