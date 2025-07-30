export default function WhyWriteTestsSlide() {
  return (
    <section>
      <h2>Fundamental Question</h2>
      <h3 style={{ textTransform: "none" }}>
        Why do we write{" "}
        <span className="text-green-600 underline">automated</span> tests?
      </h3>
      <ul>
        <li>Extra code we have to write and maintain.</li>
        <li>Extra computing resources to run them repeatedly in CI.</li>
      </ul>
    </section>
  )
}
