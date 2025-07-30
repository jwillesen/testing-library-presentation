export default function BugStatisticSlide() {
  return (
    <section>
      <img
        src="/bug-40-stat.png"
        alt="Plumber struggling to fix leaky pipes. Caption reads: 40% of bug fixes introduce new bugs."
        style={{ width: "25rem" }}
      />
      <div className="fragment">
        Changing code is <em>risky</em>.
      </div>
      <div className="fragment">
        Tests are <em>also</em> code!
      </div>
      <div className="fragment">Tests can have bugs.</div>
    </section>
  )
}
