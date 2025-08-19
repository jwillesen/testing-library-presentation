export default function ConclusionSlide() {
  return (
    <section>
      <h2>Conclusion</h2>
      <ul>
        <li className="fragment">Encapsulation is good for code quality</li>
        <li className="fragment">Tests are code too</li>
        <li className="fragment">Prefer Black Box testing</li>
        <li className="fragment">Test from the user's perspective</li>
        <ul className="fragment">
          <li>
            <code>@testing-library/dom</code>
          </li>
          <li>
            <code>@testing-library/react</code>
          </li>
          <li>
            <code>@testing-library/user-event</code>
          </li>
          <li>
            <code>@testing-library/jest-dom</code>
          </li>
        </ul>
      </ul>
    </section>
  )
}
