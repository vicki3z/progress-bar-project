import React from "react";
import { shallow } from "enzyme";

import ProgressBar from "../../components/ProgressBar";

describe("Progress Bar Component", () => {
  it("should render without error", () => {
    const component = shallow(<ProgressBar progressValue={20} limit={200} />);
    expect(component).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });

  it("should show progress value that has been passed through progressValue property", () => {
    const component = shallow(<ProgressBar progressValue={20} limit={200} />);
    expect(component.find("span[data-progress='progress-value']")).toHaveLength(
      1
    );
    expect(
      Number(component.find("span[data-progress='progress-value']").text())
    ).toEqual(20);
  });

  it("should show progress value that has been passed through progressValue property", () => {
    const component = shallow(<ProgressBar progressValue={20} limit={200} />);
    expect(component.find("span[data-progress='progress-value']")).toHaveLength(
      1
    );
    expect(
      Number(component.find("span[data-progress='progress-value']").text())
    ).not.toEqual(10);
  });

  it("should show limit value that has been passed through limit property", () => {
    const component = shallow(<ProgressBar progressValue={20} limit={200} />);
    expect(component.find("span[data-progress='limit-value']")).toHaveLength(1);
    expect(
      Number(component.find("span[data-progress='limit-value']").text())
    ).toEqual(200);
  });

  it("should have calculatePercentage function", () => {
    const component = shallow(<ProgressBar progressValue={20} limit={200} />);
    expect(component.instance().calculatePercentage()).toBeDefined();
  });

  it("calculatePercentage of progress 10 and limit 200 should equal to 5", () => {
    const component = shallow(<ProgressBar progressValue={20} limit={200} />);
    expect(component.instance().calculatePercentage(10, 200)).toEqual(5);
  });

  it("calculatePercentage of progress 62 and limit 230 should equal to 27", () => {
    const component = shallow(<ProgressBar progressValue={20} limit={200} />);
    expect(component.instance().calculatePercentage(62, 230)).toEqual(27);
  });
});
