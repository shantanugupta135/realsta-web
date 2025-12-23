"use client";

import { useEffect } from "react";

export default function ChatLoader() {
  useEffect(() => {
    const loadChat = () => {
      const script = document.createElement("script");
      script.src = "https://chat.example.com/widget.js";
      script.async = true;
      document.body.appendChild(script);

      window.removeEventListener("scroll", loadChat);
      window.removeEventListener("click", loadChat);
    };

    window.addEventListener("scroll", loadChat, { once: true });
    window.addEventListener("click", loadChat, { once: true });
  }, []);

  return null;
}
