"use client";
import { useEffect, useState } from "react";
import styles from "./FloatingCallbackForm.module.css";

export default function FloatingCallbackForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // show after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Thank you! We will contact you shortly.");
        setOpen(false);
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (err) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
         <span
          className={styles.closeIcon}
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          ×
        </span>

        <h2>Helping you find your perfect Office Space!</h2>
        <p>Speak with a workspace solution expert</p>

        <input
          type="text"
          name="name"
          placeholder="Enter your name*"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter work email*"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter mobile number*"
          value={form.phone}
          onChange={handleChange}
        />

        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Submitting..." : "Request Callback"}
        </button>
      </div>
    </div>
  );
}
