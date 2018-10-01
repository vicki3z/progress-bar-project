import React from "react";
import { shallow } from "enzyme";

import Button from "../../components/Button";

describe("Button component", () => {
  it("should render without error", () => {
    const component = shallow(<Button />);
    expect(component).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });

  it("should show button value that passed to buttonValue property", () => {
    const component = shallow(<Button buttonValue={20} />);
    expect(component.find("span")).toHaveLength(1);
    expect(Number(component.find("span").text())).toEqual(20);
  });

  it("should show button value that passed to buttonValue property", () => {
    const component = shallow(<Button buttonValue={20} />);
    expect(component.find("span")).toHaveLength(1);
    expect(Number(component.find("span").text())).not.toEqual(10);
  });
});
