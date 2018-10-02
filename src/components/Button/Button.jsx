import React from "react";

import styles from "./Button.module.scss";

const Button = ({ buttonValue, ...rest }) => (
  <div className={styles.button} {...rest}>
    <span>{buttonValue}</span>
  </div>
);

export default Button;
