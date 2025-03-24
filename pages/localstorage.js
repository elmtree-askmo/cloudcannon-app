import Head from "next/head";
import { useEffect } from "react";
import { APP_URL } from "../constant/app.constant";

export default function LocalStorage({}) {
  useEffect(() => {
    const handleMessage = (event) => {
      console.log("Received message from origin:", event.origin);
      console.log("Message event:", event);

      const allowedOrigins = [APP_URL];

      if (!allowedOrigins.includes(event.origin)) {
        console.warn(`Rejected message from unauthorized origin: ${event.origin}`);
        return;
      }

      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        console.log("Parsed data:", data);
        
        const { action, payload } = data;
        switch (action) {
          case "setMarketingSiteLocalStorage":
            localStorage.setItem("appData", JSON.stringify(payload));
            console.log("Successfully set localStorage data:", payload);
            break;
          default:
            console.log("Unhandled action:", action);
            break;
        }
      } catch (error) {
        console.error("Error processing message:", error);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <>
      <Head>
        <title>QuickTakes | AI Study Sidekick | College Learning Tools</title>
      </Head>
    </>
  );
}
