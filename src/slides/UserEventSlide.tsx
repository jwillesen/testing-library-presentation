export default function UserEventSlide() {
  return (
    <section className="text-2xl">
      <h2>User Event Library</h2>
      <h3>Example</h3>
      <pre>
        <code className="language-jsx" data-trim data-line-numbers="2,6,9">
          {`import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

it("should invoke onClick property on click event", async () => {
  const handleClick = jest.fn()
  const user = userEvent.setup()
  render(<Button onClick={handleClick}>Submit</Button>)
  const button = screen.getByRole("button", { name: "Submit" })
  await user.click(button)
  expect(handleClick).toHaveBeenCalled()
})
      `}
        </code>
      </pre>
      <h3>Features</h3>
      <ul>
        <li>
          Replaces <code>fireEvent</code> from DOM Testing Library which only
          dispatches events.
        </li>
        <li>User Event simulates complex user interactions.</li>
        <li>
          Supports keyboard, mouse, touch, upload, clipboard interactions.
        </li>
      </ul>
    </section>
  )
}
