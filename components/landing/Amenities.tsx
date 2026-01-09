import styles from "./landing.module.css";

export default function Amenities() {
  return (
    <section className={styles.amenities}>
      <h2>Fully Managed Office Amenities</h2>

      <div className={styles.amenitiesGrid}>
        <div>24x7 Power Backup</div>
        <div>High Speed Internet</div>
        <div>Security & Surveillance</div>
        <div>Housekeeping</div>
        <div>Enterprise Grade IT</div>
        <div>Reception Services</div>
      </div>
    </section>
  );
}
