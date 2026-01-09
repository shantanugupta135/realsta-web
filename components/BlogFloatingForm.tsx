"use client";

import styles from "./BlogFloatingForm.module.css";
import { useState } from "react";

export default function BlogFloatingForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    // API call here
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formCard}>
        <h3>How can we help you?</h3>
        <p>Speak with a workspace solution expert</p>

        <input type="text" placeholder="Name*" />
        <input type="tel" placeholder="Mobile number*" />
        <input type="email" placeholder="Email*" />

        <select>
          <option>Select Solution</option>
          <option>Office Space</option>
          <option>Virtual Office</option>
        </select>

            <button className='btn-secondary-alternative-custom' type="button" onClick={handleSubmit}>
                        Submit<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
        </button>
      </div>
    </div>
  );
}
