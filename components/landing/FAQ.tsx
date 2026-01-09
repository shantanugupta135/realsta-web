"use client";
import { useState, useCallback } from "react";
import styles from "./landing.module.css";

const faqs = [
  { q: "What is managed office space?", a: "Fully serviced workspace." },
  { q: "Is there a lock-in period?", a: "Flexible lease options." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = useCallback((i: number) => {
    setOpen(open === i ? null : i);
  }, [open]);

  return (
    <section className={styles.faq}>
      <h2>FAQs</h2>

      {faqs.map((item, i) => (
        <div key={i} className={styles.faqItem}>
          <button onClick={() => toggle(i)}>{item.q}</button>
          {open === i && <p>{item.a}</p>}
        </div>
      ))}
    </section>
  );
}
