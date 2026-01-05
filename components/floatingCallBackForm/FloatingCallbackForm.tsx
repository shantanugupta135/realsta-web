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

    // show after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 20000);
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

      {/* ✅ LEFT + RIGHT WRAPPER */}
      <div className={styles.container}>

        {/* 🔵 LEFT SIDE */}
        <div className={styles.left}>
          <h3>
            Trusted by over <span>5,000+</span> Clients ✨
          </h3>

          <div className={styles.logos}>
            <img src="/assets/channel-partner/walmart-logo.webp" alt="Walmart" />
            <img src="/assets/channel-partner/Vistara.webp" alt="Vistara" />
            <img src="/assets/channel-partner/TOSHIBA_Logo.webp" alt="TOSHIBA" />
            <img src="/assets/channel-partner/Sujan Industries.webp" alt="Sujan Industries" />
            <img src="/assets/channel-partner/sony-vector-logo.webp" alt="Sony Vector" />
            <img src="/assets/channel-partner/Sebia.webp" alt="Sebia" />
          </div>

          <h4>India’s Leading Office Space Provider ⭐</h4>

          <ul>
            <li>Zero Brokerage Fees</li>
            <li>Largest Coverage</li>
            <li>Dedicated Workspace Experts</li>
            <li>100% Verified Listings</li>
          </ul>
        </div>

        <div className={styles.right}>
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

          <button className='btn-secondary-alternative-custom' type="button" onClick={handleSubmit}>
                        Submit<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
          </button>
        </div>

      </div>
    </div>
  </div>
);

}
