export default function TitleSlide() {
  return (
    <section>
      <img src="/testing-library-logo.png" alt="Testing Library Logo" />
      <h1 style={{ textTransform: "none" }}>
        Testing UIs with
        <br />
        @testing-library
      </h1>
      <div className="text-right">
        <p>by Jon Willesen</p>
        <time className="text-2xl" dateTime="2025-08-19">
          Aug 19, 2025
        </time>
      </div>
    </section>
  )
}
