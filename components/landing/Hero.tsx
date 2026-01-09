import Image from "next/image";
import styles from "./landing.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <Image
          src=""
          alt="Lease premium office space in Gurgaon"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.heroContent}>
        <h1>LEASE PREMIUM OFFICE SPACE IN GURGAON</h1>
        <p>700+ Offices • Zero Setup Cost • 14+ Locations</p>
        <button>Get Premium Today</button>
      </div>
    </section>
  );
}
