export default function ModernUiTestingSlide() {
  const timeClasses = "fragment text-right"
  const listClasses = "fragment"

  return (
    <section className="text-2xl">
      <h2>Modern UI Testing</h2>
      <div className="grid grid-cols-[max-content_1fr] gap-4">
        <time className="text-right" dateTime="2015">
          2015:
        </time>
        <ul>
          <li>
            Enzyme released – shallow rendering, component internal state
            exposed
          </li>
          <li>Jest gets popular – snapshot testing trend explodes</li>
        </ul>

        <time className={timeClasses} dateTime="2017">
          2017:
        </time>
        <ul className={listClasses}>
          <li>
            Enzyme struggles to keep up with React (functional components,
            hooks, context API)
          </li>
        </ul>

        <time className={timeClasses} dateTime="2018">
          2018:
        </time>
        <ul className={listClasses}>
          <li>
            Kent C. Dodds releases react-testing-library (now
            @testing-library/react)
          </li>
          <li>
            <blockquote style={{ margin: 0 }}>
              "The more your tests resemble the way your software is used, the
              more confidence they can give you."
            </blockquote>
          </li>
        </ul>

        <time className={timeClasses} dateTime="2018">
          2020s:
        </time>
        <ul className={listClasses}>
          <li>
            @testing-library dominates component testing – React, Vue, Angular,
            Svelte, etc.
          </li>
          <li>
            Cypress, Playwright, TestCafe, Web Test Runner – faster, more
            dev-focused end-to-end testing than Selenium
          </li>
          <li>
            Consensus: test public interface, avoid implementation details, make
            accessibility a priority.
          </li>
        </ul>
      </div>
    </section>
  )
}
