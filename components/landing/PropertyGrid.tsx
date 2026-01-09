import Image from "next/image";
import styles from "./landing.module.css";

const properties = Array.from({ length: 6 });

export default function PropertyGrid() {
  return (
    <section className={styles.gridSection}>
      <h2>Premium Office Spaces Available for Lease</h2>

      <div className={styles.grid}>
        {properties.map((_, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/images/property.webp"
                alt="Office Space Gurgaon"
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <h3>Embassy Digital Greens</h3>
            <p>Golf Course Road, Gurgaon</p>
          </div>
        ))}
      </div>
    </section>
  );
}
