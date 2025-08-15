export default function DomTestingLibrarySlide() {
  return (
    <section className="text-2xl">
      <h2>DOM Testing Library</h2>

      <div className="flex flex-col gap-8">
        <div className="fragment">
          <h3>Example</h3>
          <pre>
            <code
              className="language-js"
              data-trim
              data-line-numbers
            >{`import { screen } from "@testing-library/dom"

const submitBtn = screen.getByText("Submit")
const radioButtons = screen.queryAllByRole("radio")
const termInput = await screen.findByLabelText(/term/i)
                `}</code>
          </pre>
        </div>

        <div className="flex gap-4 text-xl items-start">
          <table className="fragment" style={{ margin: 0 }}>
            <thead>
              <tr>
                <th>Prefix</th>
                <th>N/A</th>
                <th>=== 1</th>
                <th>{"> 1"}</th>
                <th>Async</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>get</strong>
                </td>
                <td>throw</td>
                <td>return</td>
                <td>throw</td>
                <td>No</td>
              </tr>
              <tr>
                <td>
                  <strong>query</strong>
                </td>
                <td>null</td>
                <td>return</td>
                <td>throw</td>
                <td>No</td>
              </tr>
              <tr>
                <td>
                  <strong>find</strong>
                </td>
                <td>throw</td>
                <td>return</td>
                <td>throw</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>
                  <strong>getAll</strong>
                </td>
                <td>throw</td>
                <td>array</td>
                <td>array</td>
                <td>No</td>
              </tr>
              <tr>
                <td>
                  <strong>queryAll</strong>
                </td>
                <td>[]</td>
                <td>array</td>
                <td>array</td>
                <td>No</td>
              </tr>
              <tr>
                <td>
                  <strong>findAll</strong>
                </td>
                <td>throw</td>
                <td>array</td>
                <td>array</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
          <table className="fragment" style={{ margin: 0 }}>
            <thead>
              <tr>
                <td>
                  <strong>Selector</strong>
                </td>
                <td>
                  <strong>Example</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ByText</td>
                <td>{"<element>text</element>"}</td>
              </tr>
              <tr>
                <td>ByLabelText</td>
                <td>{'<label for="...">, aria-label, aria-labelledby'}</td>
              </tr>
              <tr>
                <td>ByPlaceholderText</td>
                <td>{'<input placeholder="...">, aria-placeholder'}</td>
              </tr>
              <tr>
                <td>ByRole</td>
                <td>{'<button>, <div role="button">'}</td>
              </tr>
              <tr>
                <td>ByDisplayValue</td>
                <td>{"<input>, <progress>, <meter>, aria-valuenow"}</td>
              </tr>
              <tr>
                <td>ByAltText</td>
                <td>{'<img alt="...">'}</td>
              </tr>
              <tr>
                <td>ByTitle</td>
                <td>{'<element title="...">, <title>'}</td>
              </tr>
              <tr>
                <td>ByTestId</td>
                <td>{'<element data-testid="...">'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
