import React from "react";
import { shallow } from "enzyme";

import App from "../App.js";

describe("main App component", () => {
  it("should render without error", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("calculateBarValue should be defined", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().calculateBarValue()).toBeDefined();
  });

  it("caclulateBarValue for 63 and 38 should equal to 101", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().calculateBarValue(63, 38)).toEqual(101);
  });

  it("caclulateBarValue for 63 and -38 should equal to 25", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().calculateBarValue(63, -38)).toEqual(25);
  });

  it("caclulateBarValue for 20 and -38 should equal to 0", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().calculateBarValue(20, -38)).toEqual(0);
  });
});
