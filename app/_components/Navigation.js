"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // import useRouter from Next.js

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  const handleContactClick = () => {
    // Update the URL hash to "#contact" so it works across different pages
    router.push("#contact"); // This will append #contact to the URL
    setIsOpen(false); // Close the menu on small screens
  };

  return (
    <nav className="relative">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="sm:hidden text-3xl p-2 text-white hover:text-primary-100 transition-all"
      >
        {isOpen ? "×" : "☰"}
      </button>

      {/* Full-Screen Overlay Navigation for Small Screens */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden fixed inset-0 bg-gray-800 bg-opacity-70 z-10 transition-all duration-500`}
        onClick={handleLinkClick}
      >
        {/* Full-Screen Navigation Menu */}
        <div className="flex flex-col items-center justify-start w-full h-full pt-20 space-y-6 text-white">
          <a
            href="/about"
            className="text-3xl hover:text-primary-100 transition-transform duration-300 hover:scale-110"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="/menu"
            className="text-3xl hover:text-primary-100 transition-transform duration-300 hover:scale-110"
            onClick={handleLinkClick}
          >
            Menu
          </a>
          <a
            href="/gallery"
            className="text-3xl hover:text-primary-100 transition-transform duration-300 hover:scale-110"
            onClick={handleLinkClick}
          >
            Gallery
          </a>

          <a
            href="/booking"
            className="text-3xl hover:text-primary-100 transition-transform duration-300 hover:scale-110"
            onClick={handleLinkClick}
          >
            Bookings
          </a>
        </div>
      </div>

      {/* Navigation Links for Large Screens */}
      <div className="sm:flex hidden flex-row items-center justify-end w-full bg-transparent py-6 px-10 fixed top-0 right-0 z-20">
        <a
          href="/about"
          className="text-2xl text-white hover:text-primary-100 transition-transform duration-300 hover:scale-105 mx-4"
        >
          About
        </a>
        <a
          href="/menu"
          className="text-2xl text-white hover:text-primary-100 transition-transform duration-300 hover:scale-105 mx-4"
        >
          Menu
        </a>
        <a
          href="/gallery"
          className="text-2xl text-white hover:text-primary-100 transition-transform duration-300 hover:scale-105 mx-4"
        >
          Gallery
        </a>

        <a
          href="/booking"
          className="text-2xl text-white hover:text-primary-100 transition-transform duration-300 hover:scale-105 mx-4"
        >
          Bookings
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
