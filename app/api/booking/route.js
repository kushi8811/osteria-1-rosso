import { supabase } from "@/app/utils/supabaseClient";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid"; // Importing uuidv4 to generate unique IDs
const GMAIL_APP_PASSWORD = "pmzxitnhtksyybym";
const BUSINESS_EMAIL = "osteriaunorosso@gmail.com";
const GMAIL_USER = "osteriaunorosso@gmail.com";

export async function POST(req) {
  try {
    // Parse the incoming request body to get booking data
    const formData = await req.json();

    // Generate a unique ID using uuidv4
    const uniqueBookingId = uuidv4();

    // Insert booking into the Supabase table 'bookings'
    const { data, error } = await supabase.from("bookings").insert([
      {
        id: uniqueBookingId,
        name: formData.name,
        email: formData.email,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        specialRequest: formData.specialRequest || "",
        status: "pending", // Initial status is 'pending' before approval
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

    // Create the nodemailer transporter for sending the email
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Using Gmail service
      auth: {
        user: GMAIL_USER, // Your business email
        pass: GMAIL_APP_PASSWORD, // Your Gmail app password
      },
    });

    // Set up email options
    const mailOptions = {
      from: GMAIL_USER,
      to: BUSINESS_EMAIL,
      subject: "New Booking Request - Osteria Un Rosso",
      html: emailText,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Booking saved and manager notified!", data }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting booking:", error);
    return new Response("Failed to submit booking request.", { status: 500 });
  }
}
