export default function EnzymeCode() {
  return (
    <section className="text-xl">
      <h2>Testing with Enzyme</h2>
      <div className="flex">
        <pre className="flex-1">
          <code
            className="language-jsx"
            data-trim
            // data-line-numbers="5-8|10-14|16-20|22-26"
            data-line-numbers
          >
            {`import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter (Enzyme style)', () => {
  it('starts at zero', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state('count')).toBe(0);
  });

  it('increments when button is clicked', () => {
    const wrapper = shallow(<Counter />);
    wrapper.find('.increment-btn').simulate('click');
    expect(wrapper.state('count')).toBe(1);
  });

  it('renders the count', () => {
    const wrapper = shallow(<Counter />);
    wrapper.setState({ count: 42 });
    expect(wrapper.find('.count-value').text()).toBe('42');
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });
});
`}
          </code>
        </pre>
        <div className="flex-1">
          <h3 className="fragment">Encapsulation?</h3>
          <ul>
            <li className="fragment">
              Examines the component's internal state.
            </li>
            <li className="fragment">Selects elements using CSS selectors.</li>
            <li className="fragment">
              Snapshot captures the shallow rendering tree – composed components
              appear in snapshot.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
