export default function ReactTestingLibrary() {
  return (
    <section className="text-2xl">
      <h2>React Testing Library</h2>
      <h3>Example</h3>
      <pre>
        <code className="language-jsx" data-trim data-line-numbers="1,5">
          {`import { render, screen } from "@testing-library/react")
import Button from "./Button.component"

it("should render a button with the correct text", () => {
  render(<Button>Click Me</Button>)
  const button = screen.getByRole("button", { name: "Click Me" })
  expect(button).toBeInTheDocument()
})`}
        </code>
      </pre>
      <h3>Features</h3>
      <ul>
        <li>
          Provides a <code>render</code> function to mount components into the
          DOM.
        </li>
        <li>Re-exports DOM Testing Library for convenience.</li>
      </ul>
    </section>
  )
}
