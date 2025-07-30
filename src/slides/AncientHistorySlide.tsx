export default function AncientHistorySlide() {
  const timeClasses = "fragment text-right"
  const listClasses = "fragment"

  return (
    <section className="text-2xl">
      <h2>Ancient History</h2>
      <div className="r-stack">
        <img
          src="/i-was-there.png"
          alt="Cartoon image of Alrond saying 'I was there, Galdalf. I saw the forging of the Internet.'"
          className="fragment fade-out"
          style={{ width: "20rem" }}
        />
        <div className="grid grid-cols-[max-content_1fr] gap-4">
          <time className={timeClasses} dateTime="2000">
            Early 2000's:
          </time>
          <ul className={listClasses}>
            <li>Browser wars – IE, Netscape, Chrome, Firefox, Opera</li>
            <li>Cross browser JavaScript is painful</li>
          </ul>

          <time className={timeClasses} dateTime="2001">
            2001:
          </time>
          <ul className={listClasses}>
            <li>The Agile Manifesto</li>
            <li>Automated testing and TDD gain popularity on backend</li>
            <li>Most UI testing is still manual</li>
          </ul>

          <time className={timeClasses} dateTime="2004">
            2004:
          </time>
          <ul className={listClasses}>
            <li>Selenium created – browser automation</li>
          </ul>

          <time className={timeClasses} dateTime="2006">
            2006:
          </time>
          <ul className={listClasses}>
            <li>
              jQuery released – makes DOM manipulation and cross-browser JS
              dramatically easier.
            </li>
          </ul>

          <time className={timeClasses} dateTime="2007">
            2007:
          </time>
          <ul className={listClasses}>
            <li>
              Selenium WebDriver introduced – standardized browser automation.
            </li>
          </ul>

          <time className={timeClasses} dateTime="2008">
            2008:
          </time>
          <ul className={listClasses}>
            <li>Chrome released with V8 – JavaScript gets a fast engine</li>
            <li>
              QUnit released – finally unit testing for JavaScript! UI and DOM
              testing is still a pain.
            </li>
          </ul>

          <time className={timeClasses} dateTime="2009">
            2009:
          </time>
          <ul className={listClasses}>
            <li>
              <strong className="text-green-500">Node.js released</strong> –
              based on V8.
            </li>
            <li>npm released – JavaScript gets a package manager</li>
            <li>jsdom released – enables headless DOM testing.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
