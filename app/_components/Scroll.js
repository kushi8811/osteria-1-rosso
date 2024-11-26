"use client"; // Ensures it's a client-side component

import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToFooter = () => {
  const router = useRouter();

  // Ensure that the component is only run client-side
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url.includes("#contact")) {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // Check if the current URL already has the #contact hash
    if (router.asPath.includes("#contact")) {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    // Listen for route changes
    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup the event listener
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return null;
};

export default ScrollToFooter;
