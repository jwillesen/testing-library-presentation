export default function TestingLibraryIntroSlide() {
  return (
    <section className="text-3xl">
      <h2>Introduction to Testing Library</h2>
      <ul>
        <li>
          A family of libraries for testing UI components in a user-centric way.
        </li>
        <li>Focuses on testing the public interface of components.</li>
        <li>
          Encourages testing in a way that resembles how users interact with the
          application.
        </li>
      </ul>
      <div className="fragment">
        <h3>Layers</h3>
        <ul>
          <li>
            <strong>DOM Testing Library</strong> – Base layer that provides
            user-centric queries for finding elements on the page.
          </li>
          <li>
            <strong>React Testing Library</strong> – Utility for mounting React
            components onto the page for testing.
          </li>
          <li>
            <strong>jest-dom</strong> – Adds custom assertions for DOM elements.
          </li>
          <li>
            <strong>User Event</strong> – Library for simulating user
            interactions.
          </li>
        </ul>
      </div>
    </section>
  )
}
