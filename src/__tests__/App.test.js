import React from "react";
import { shallow } from "enzyme";

import App from "../App.js";

describe("main App component", () => {
  it("should render without error", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
