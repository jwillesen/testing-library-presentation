export default function RenaissanceSlide() {
  const timeClasses = "fragment text-right"
  const listClasses = "fragment"

  return (
    <section className="text-2xl">
      <h2>JavaScript Renaissance</h2>
      <div className="grid grid-cols-[max-content_1fr] gap-4">
        <time className={timeClasses} dateTime="2010">
          2010's:
        </time>
        <ul className={listClasses}>
          <li>
            JavaScript matures – ES5, ES6, let/const, modules, classes, arrow
            functions, promises, async/await
          </li>
          <li>Angular, Ember, Backbone, Knockout popularize SPA patterns</li>
          <li>
            Jasmine, Mocha, QUnit, Karma, Sinon—better, but UI testing still
            clunky
          </li>
        </ul>

        <time className={timeClasses} dateTime="2013">
          2013:
        </time>
        <ul className={listClasses}>
          <li>React Released – starts the component-based UI paradigm</li>
          <li>SPA patterns on the rise</li>
        </ul>

        <time className={timeClasses} dateTime="2014">
          2014:
        </time>
        <ul className={listClasses}>
          <li>
            Jest released – "batteries-included" test runner, assertions, mocks,
            snapshot testing
          </li>
        </ul>

        <time className={timeClasses} dateTime="2015">
          2015:
        </time>
        <ul className={listClasses}>
          <li>
            Enzyme released – shallow rendering, component internal state
            exposed
          </li>
          <li>Jest gets popular – snapshot testing trend explodes</li>
        </ul>
      </div>
    </section>
  )
}
