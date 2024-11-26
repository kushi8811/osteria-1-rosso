"use client";
import { useState } from "react";
import imagebg from "../../public/osteria-images/imagebg2.jpg";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    specialRequest: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) setSuccess(true);
    else alert("Something went wrong!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${imagebg.src})`,
      }}
    >
      <div className="w-11/12 sm:w-full p-4 sm:p-8 max-w-sm sm:max-w-lg bg-white bg-opacity-90 rounded-lg shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Book a Table
        </h2>
        {success ? (
          <p className="text-green-600 text-center font-semibold">
            Booking successfully submitted! 🎉 Reservation details will be sent
            in the email! Thank you ~ Osteria 1 Rosso
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-gray-700 font-medium mb-1 text-sm sm:text-base"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1 text-sm sm:text-base"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
              <div className="flex-1">
                <label
                  className="block text-gray-700 font-medium mb-1 text-sm sm:text-base"
                  htmlFor="date"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-gray-700 font-medium mb-1 text-sm sm:text-base"
                  htmlFor="time"
                >
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1 text-sm sm:text-base"
                htmlFor="guests"
              >
                Guests
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                max="20"
                className="w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1 text-sm sm:text-base"
                htmlFor="specialRequest"
              >
                Special Requests
              </label>
              <textarea
                id="specialRequest"
                name="specialRequest"
                value={formData.specialRequest}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="E.g., Allergies, wheelchair access, etc."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
            >
              Submit Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
