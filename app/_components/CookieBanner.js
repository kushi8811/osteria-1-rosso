"use client";
import React from "react";
import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Accept 🍪"
        cookieName="yourCookieName"
        style={{ background: "#2B373B", color: "#fff", fontSize: "14px" }}
        buttonStyle={{
          background: "#4CAF50",
          color: "#fff",
          fontSize: "14px",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
        expires={150}
      >
        We use cookies to improve your experience. By using our website, you
        agree to our use of cookies.
      </CookieConsent>
    </div>
  );
}
