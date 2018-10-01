import React from "react";
import { shallow } from "enzyme";

import ProgressBar from "../../components/ProgressBar";

describe("Progress Bar Component", () => {
  it("should render without error", () => {
    const component = shallow(<ProgressBar />);
    expect(component).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });

  it("should show progress value that has been passed through progressValue property", () => {
    const component = shallow(<ProgressBar progressValue={20} />);
    expect(component.find("span")).toHaveLength(1);
    expect(Number(component.find("span").text())).toEqual(20);
  });
});
