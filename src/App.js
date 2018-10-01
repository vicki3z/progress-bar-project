import React, { Component } from "react";
import styles from "./App.module.scss";

import Button from "./components/Button";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        Progress Bar
        <Button buttonValue={10} />
      </div>
    );
  }
}

export default App;
