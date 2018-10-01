import React from "react";

import styles from "./Button.module.scss";

const Button = ({ buttonValue }) => (
  <div className={styles.button}>
    <span>{buttonValue}</span>
  </div>
);

export default Button;
