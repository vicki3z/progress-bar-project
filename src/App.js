import React, { Component } from "react";
import styles from "./App.module.scss";

import axios from "axios";

import Button from "./components/Button";
import ProgressBar from "./components/ProgressBar";

class App extends Component {
  state = {
    progress: 62,
    limit: 230,
    isLoading: false,
    buttons: [],
    bars: [],
    selectedBar: 1
  };

  UNSAFE_componentWillMount() {
    this.setState({
      ...this.state,
      isLoading: true
    });

    axios.get("http://pb-api.herokuapp.com/bars").then(response => {
      console.log(response);

      this.setState({
        ...this.state,
        isLoading: false
      });

      this.initialiseProgressBar(response.data);
    });
  }

  initialiseProgressBar(data) {
    this.setState({
      ...this.state,
      buttons: data.buttons,
      bars: data.bars,
      limit: data.limit
    });
  }

  calculateBarValue(currentValue, newValue) {
    return currentValue + newValue <= 0 ? 0 : currentValue + newValue;
  }

  handleClick(value) {
    let tempBars = this.state.bars;
    tempBars[this.state.selectedBar - 1] = this.calculateBarValue(
      tempBars[this.state.selectedBar - 1],
      value
    );

    this.setState({
      ...this.state,
      bars: tempBars
    });
  }

  handleSelect(value) {
    this.setState({
      ...this.state,
      selectedBar: value
    });
  }

  render() {
    const { limit, buttons, bars, isLoading, selectedBar } = this.state;
    return (
      <div className={styles.app}>
        <h1>Progress Bar</h1>
        {!isLoading && (
          <div>
            <div className={styles.inputDropdownWrapper}>
              <select
                value={selectedBar}
                onChange={event => this.handleSelect(event.target.value)}
                className={styles.inputDropdown}
              >
                {bars.map((bar, index) => (
                  <option value={index + 1} key={index}>
                    Progress Bar {index + 1}
                  </option>
                ))}
              </select>
            </div>
            <div>
              {bars.map((bar, index) => (
                <ProgressBar progressValue={bar} limit={limit} key={index} />
              ))}
            </div>
            <div className={styles.buttonsWrapper}>
              {buttons.map((button, index) => (
                <Button
                  buttonValue={button}
                  key={index}
                  onClick={() => this.handleClick(button)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
