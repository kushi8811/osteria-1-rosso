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
  const [specialNotice, setSpecialNotice] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      const selectedDate = new Date(value);
      const isNewYearsEve =
        selectedDate.getMonth() === 11 && selectedDate.getDate() === 31;
      setSpecialNotice(isNewYearsEve);
    }

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
      <div className="w-11/12 sm:w-full p-4 sm:p-8 max-w-sm sm:max-w-lg bg-white bg-opacity-90 rounded-lg shadow-2xl -translate-y-12">
        {/* Apply translate-y class for upward movement */}
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
            {specialNotice && (
              <div className="p-4 mb-4 text-sm text-yellow-800 bg-yellow-200 rounded-md">
                Please note: Bookings for New Year&apos;s Eve (December 31st)
                are €120 per person.
              </div>
            )}
            {/* Form Inputs */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
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
                className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Other Inputs */}
            <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
              <div className="flex-1">
                <label
                  className="block text-gray-700 font-medium mb-1"
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
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-gray-700 font-medium mb-1"
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
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
            >
              Submit Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
