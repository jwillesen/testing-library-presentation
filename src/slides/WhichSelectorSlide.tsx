export default function WhichSelectorSlide() {
  return (
    <section className="text-2xl">
      <h2>Choosing the Right Selector – Best Practices</h2>
      <h3>Preferred order:</h3>
      <table>
        <thead>
          <tr>
            <td>
              <strong>Selector</strong>
            </td>
            <td>
              <strong>When to use</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="fragment">
            <td>ByRole</td>
            <td>Top preference for just about everything.</td>
          </tr>
          <tr className="fragment">
            <td>ByLabelText</td>
            <td>Great for form elements.</td>
          </tr>
          <tr className="fragment">
            <td>ByText</td>
            <td>When you need to find non-interactive elements.</td>
          </tr>
          <tr className="fragment">
            <td>ByDisplayValue</td>
            <td>When the current value of the form field is useful.</td>
          </tr>
          <tr className="fragment">
            <td>ByAltText</td>
            <td>When an image has no visible text alternative.</td>
          </tr>
          <tr className="fragment">
            <td>ByTestId</td>
            <td>Last resort, often used when text is dynamic.</td>
          </tr>
          <tr className="fragment">
            <td>ByPlaceholderText</td>
            <td>Why u no have label? ლ(ಠ益ಠლ)</td>
          </tr>
          <tr className="fragment">
            <td>ByTitle</td>
            <td>No.</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
