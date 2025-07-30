export default function EncapsulationSlide() {
  return (
    <section className="text-2xl">
      <h2>Fundamental Concept</h2>
      <dl>
        <dt>Encapsulation</dt>
        <dd className="fragment">
          The practice of bundling data and methods that operate on that data
          within a module, class, or component, and exposing only a{" "}
          <span className="bg-green-600 rounded-lg p-1">public interface</span>{" "}
          while hiding the internal workings.
        </dd>
      </dl>
      <blockquote className="fragment fade-up">
        “The key to modular design is to divide a system into modules that hide
        their secrets well.”
        <br />— David Parnas, “On the Criteria To Be Used in Decomposing Systems
        into Modules,” 1972
      </blockquote>
      <dl>
        <div className="fragment fade-right">
          <dt>Modularity</dt>
          <dd>
            Ability to change the internals of an encapsulated module without
            breaking code that depends on the public interface.
          </dd>
        </div>
        <div className="fragment fade-right">
          <dt>Abstraction</dt>
          <dd>
            Consumers only need to understand <em>what</em> the module does, not{" "}
            <em>how</em> it does it.
          </dd>
        </div>
      </dl>
    </section>
  )
}
