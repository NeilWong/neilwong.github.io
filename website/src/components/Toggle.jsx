import React from "react";
import propTypes from "prop-types";

import styles from "./Toggle.module.scss";

const Toggle = ({ handleToggle }) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={handleToggle} />
      <span className={[styles.slider, styles.round].join(" ")}></span>
    </label>
  );
};

Toggle.propTypes = {
  handleToggle: propTypes.func.isRequired,
};

export default Toggle;
