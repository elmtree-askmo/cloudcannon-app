import Head from "next/head";
import { useEffect } from "react";

export default function LocalStorage({}) {
  useEffect(() => {
    const handleMessage = (event) => {
      const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      const { action, payload } = data;
      switch (action) {
        case "setMarketingSiteLocalStorage":
          localStorage.setItem("appData", JSON.stringify(payload));
          break;
        default:
          break;
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
