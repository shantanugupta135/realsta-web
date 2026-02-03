"use client";

import styles from "./BlogFloatingForm.module.css";
import { useState } from "react";
import { submitForm, FormData } from "../services/formService";

/* 🔹 UI form fields */
interface BlogFormUI {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function BlogFloatingForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<BlogFormUI>({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [touched, setTouched] = useState<Record<keyof BlogFormUI, boolean>>({
    name: false,
    phone: false,
    email: false,
    message: false
  });

  /* ---------------- VALIDATION ---------------- */

  const isEmailValid = (email: string) =>
    /^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email);

  const isFormValid =
    form.name.trim() !== "" &&
    isEmailValid(form.email) &&
    form.phone.length === 10;

  const isFieldInvalid = (field: keyof BlogFormUI) => {
    if (!touched[field]) return false;

    if (field === "email") return !isEmailValid(form.email);
    if (field === "phone") return form.phone.length !== 10;
    if (field === "name") return form.name.trim() === "";

    return false;
  };

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: keyof BlogFormUI) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  /* 🔹 MAP UI FORM → API PAYLOAD */
  const buildApiPayload = (): FormData => {
    const nameParts = form.name.trim().split(" ");

    return {
      firstName: nameParts[0],
      lastName: nameParts.slice(1).join(" ") || "NA",
      emailId: form.email,
      phone: form.phone,
      dropdown: "Blog Floating Form",
      message: form.message || ""
    };
  };

  const handleSubmit = async () => {
    if (!isFormValid || loading) return;

    try {
      setLoading(true);
      const payload = buildApiPayload();
      const response = await submitForm(payload);

      alert(response);

      setForm({
        name: "",
        phone: "",
        email: "",
        message: ""
      });

      setTouched({
        name: false,
        phone: false,
        email: false,
        message: false
      });
    } catch {
      alert("Something went wrong. Please try again.");
      setForm({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
       setTouched({
        name: false,
        phone: false,
        email: false,
        message: false
      });
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className={styles.wrapper}>
      <div className={styles.formCard}>
        <h3>How can we help you?</h3>
        <p>Speak with a workspace solution expert</p>

        <input
          name="name"
          placeholder="Name *"
          value={form.name}
          onChange={handleChange}
          onBlur={() => handleBlur("name")}
          className={isFieldInvalid("name") ? styles.error : ""}
        />

        <input
          name="phone"
          placeholder="Mobile number *"
          value={form.phone}
          onChange={e =>
            setForm(prev => ({
              ...prev,
              phone: e.target.value.replace(/\D/g, "").slice(0, 10)
            }))
          }
          onBlur={() => handleBlur("phone")}
          className={isFieldInvalid("phone") ? styles.error : ""}
        />

        <input
          name="email"
          type="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
          onBlur={() => handleBlur("email")}
          className={isFieldInvalid("email") ? styles.error : ""}
        />

        {/* 🔹 MESSAGE FIELD (Optional) */}
        <textarea
          name="message"
          placeholder="Message (optional)"
          value={form.message}
          onChange={handleChange}
          rows={3}
          className={styles.textarea}
        />

        <button
          className="btn-secondary-alternative-custom"
          type="button"
          onClick={handleSubmit}
          disabled={!isFormValid || loading}
          style={{
            opacity: !isFormValid || loading ? 0.6 : 1
          }}
        >
          {loading ? "Submitting..." : "Submit"}
          <i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
        </button>
      </div>
    </div>
  );
}
