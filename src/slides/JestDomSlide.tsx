export default function JestDomSlide() {
  return (
    <section className="text-2xl">
      <h2>jest-dom Library</h2>
      <p>
        Adds matchers to <code>expect</code> to help express expectations about
        the DOM.
      </p>
      <h3>
        Example Assertions: <code>expect(elt)</code>
      </h3>
      <ul>
        {/* <li>
          <code>expect(elt)</code>
        </li> */}
        <li>
          <code>.toBeDisabled()</code>
        </li>
        <li>
          <code>.toBeInvalid()</code>
        </li>
        <li>
          <code>.toBeVisible()</code>
        </li>
        <li>
          <code>.toHaveClass("highlight")</code>
        </li>
        <li>
          <code>.toHaveAttribute("aria-controls", "tab-panel-id")</code>
        </li>
        <li>
          <code>.toBeInTheDocument()</code>
        </li>
      </ul>
    </section>
  )
}
