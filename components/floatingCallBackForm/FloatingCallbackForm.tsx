"use client";
import { useEffect, useState } from "react";
import styles from "./FloatingCallbackForm.module.css";
import { FormData, submitForm } from "../../services/formService";

/* 🔹 UI form (3 mandatory fields) */
interface ModalForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function FloatingCallbackForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<ModalForm>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [touched, setTouched] = useState<Record<keyof ModalForm, boolean>>({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  /* ---------------- VALIDATION ---------------- */

  const isEmailValid = (email: string) =>
    /^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email);

  const isFormValid =
    form.name.trim().length > 0 &&
    isEmailValid(form.email) &&
    form.phone.length === 10;

  const isFieldInvalid = (field: keyof ModalForm) => {
    if (!touched[field]) return false;

    if (field === "email") return !isEmailValid(form.email);
    if (field === "phone") return form.phone.length !== 10;
    if (field === "name") return form.name.trim() === "";

    return false;
  };

  /* ---------------- AUTO OPEN ---------------- */

  useEffect(() => {
    const t1 = setTimeout(() => setOpen(true), 10000);
    const t2 = setTimeout(() => setOpen(true), 25000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: keyof ModalForm) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  /* 🔹 MAP UI FORM → API PAYLOAD */
  const buildApiPayload = (): FormData => {
    const parts = form.name.trim().split(" ");

    return {
      firstName: parts[0],
      lastName: parts.slice(1).join(" ") || "NA",
      emailId: form.email,
      phone: form.phone,
      dropdown: "Individual Blog Inquiry",
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
        email: "",
        phone: "",
        message: ""
      });
      setTouched({
        name: false,
        email: false,
        phone: false,
        message: false
      });
      setOpen(false);
    } catch {
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  /* ---------------- UI ---------------- */

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <span className={styles.closeIcon} onClick={() => setOpen(false)}>
          ×
        </span>

        <div className={styles.container}>
          {/* LEFT SIDE */}
          <div className={styles.left}>
            <h3>
              Trusted by <span>5,000+</span> Clients ✨
            </h3>

            <div className={styles.logos}>
              <img src="/assets/channel-partner/walmart-logo.webp" alt="Walmart" />
              <img src="/assets/channel-partner/Vistara.webp" alt="Vistara" />
              <img src="/assets/channel-partner/TOSHIBA_Logo.webp" alt="Toshiba" />
              <img src="/assets/channel-partner/sony-vector-logo.webp" alt="Sony" />
              <img src="/assets/channel-partner/CREMICA-LOGO-1.webp" alt="Walmart" />
              <img src="/assets/channel-partner/crimson.webp" alt="Vistara" />
            </div>

            <ul>
              <li>Zero Brokerage</li>
              <li>Verified Listings</li>
              <li>Workspace Experts</li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.right}>
            <h2>Find Your Perfect Office Space</h2>
            <p>Talk to our workspace expert</p>

            <input
              name="name"
              placeholder="Your Name *"
              value={form.name}
              onChange={handleChange}
              onBlur={() => handleBlur("name")}
              className={isFieldInvalid("name") ? styles.error : ""}
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email *"
              value={form.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              className={isFieldInvalid("email") ? styles.error : ""}
            />

            <input
              name="phone"
              placeholder="Phone Number *"
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

            <button
              className="btn-secondary-alternative-custom"
              type="button"
              onClick={handleSubmit}
              disabled={!isFormValid || loading}
              style={{
                opacity: !isFormValid || loading ? 0.6 : 1,
                cursor: !isFormValid || loading ? "not-allowed" : "pointer"
              }}
            >
              {loading ? "Submitting..." : "Submit"}
             <i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
