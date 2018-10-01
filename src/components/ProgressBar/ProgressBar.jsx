import React, { Component } from "react";

class ProgressBar extends Component {
  calculatePercentage(progress, limit) {
    let percentage = (progress / limit) * 100;
    return Math.round(percentage);
  }

  render() {
    const { progressValue, limit } = this.props;
    return (
      <div>
        <span data-progress="progress-value">{progressValue}</span>
        <span data-progress="limit-value">{limit}</span>
      </div>
    );
  }
}

export default ProgressBar;
