export default function CallbackForm() {
  return (
    <section style={{ padding: "60px 20px", background: "#111", color: "#fff" }}>
      <h2>Request a Callback</h2>
      <form>
        <input placeholder="Full Name" />
        <input placeholder="Phone Number" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
