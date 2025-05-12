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
        style={{
          background: "#2B373B",
          color: "#fff",
          fontSize: "14px",
          padding: "10px 20px",
          position: "fixed",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: "9999",
        }}
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

      <style jsx>{`
        /* Media Queries for Small Screens */
        @media (max-width: 600px) {
          .cookieConsent {
            font-size: 12px !important;
            padding: 8px 15px !important;
          }

          .cookieConsent button {
            font-size: 12px !important;
            padding: 8px 15px !important;
          }
        }

        @media (max-width: 400px) {
          .cookieConsent {
            font-size: 11px !important;
            padding: 6px 12px !important;
          }

          .cookieConsent button {
            font-size: 11px !important;
            padding: 6px 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
