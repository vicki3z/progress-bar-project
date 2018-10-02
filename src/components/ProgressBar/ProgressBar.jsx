import React, { Component } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import styles from "./ProgressBar.module.scss";

class ProgressBar extends Component {
  static propTypes = {
    progressValue: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
  };

  state = {
    percentage: 0
  };

  UNSAFE_componentWillMount() {
    const { progressValue, limit } = this.props;
    this.setState({
      percentage: this.calculatePercentage(progressValue, limit)
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.progressValue !== nextProps.progressValue) {
      this.setState({
        percentage: this.calculatePercentage(
          nextProps.progressValue,
          nextProps.limit
        )
      });
    }
  }

  calculatePercentage(progress, limit) {
    let percentage = (progress / limit) * 100;
    return Math.round(percentage) <= 0 ? 0 : Math.round(percentage);
  }

  render() {
    const { progressValue, limit, style } = this.props;
    const { percentage } = this.state;

    return (
      <div className={styles.progressBar} style={style}>
        <div
          className={
            percentage > 100
              ? classNames(styles.progress, styles.overLimit)
              : styles.progress
          }
          style={{
            width: percentage > 100 ? "100%" : `${percentage}%`
          }}
        />
        <span data-progress="progress-value" className={styles.hide}>
          {progressValue}
        </span>
        <span data-progress="limit-value" className={styles.hide}>
          {limit}
        </span>
        <span data-progress="percentage" className={styles.progressBarValue}>
          {percentage}%
        </span>
      </div>
    );
  }
}

export default ProgressBar;
