import React, { Component } from "react";
import styles from "./App.module.scss";

import Button from "./components/Button";
import ProgressBar from "./components/ProgressBar";

class App extends Component {
  state = {
    progress: 62,
    limit: 230
  };

  handleClick(value) {
    this.setState({
      ...this.state,
      progress:
        this.state.progress + value <= 0 ? 0 : this.state.progress + value
    });
  }
  render() {
    const { progress, limit } = this.state;
    return (
      <div className={styles.app}>
        Progress Bar
        <Button buttonValue={10} onClick={() => this.handleClick(10)} />
        <Button buttonValue={-10} onClick={() => this.handleClick(-10)} />
        <ProgressBar progressValue={progress} limit={limit} />
      </div>
    );
  }
}

export default App;
