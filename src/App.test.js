import { render, screen } from '@testing-library/react';
import App from './App';
import {mount} from "enzyme"
// import Counter from './Counter';


describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  })

  test('renders the title of counter', () => {
    // const wrapper = shallow(<App />);
    expect(wrapper.find("h1").text()).toContain("This is counter app")
  });

  test("render a button with text of `increment`", () => {
    // const wrapper = shallow(<App />)
    expect(wrapper.find("#increment-btn").text()).toBe('Increment');
  })

  test("render the initial value of state in a div", () => {
    expect(wrapper.find('#counter-value').text()).toBe("0");
  })

  test("render the click event of increement/decrement button and increment/decrement counter value", () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("1")

    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("0")

    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find("#counter-value").text()).toBe("0")
  })

})

