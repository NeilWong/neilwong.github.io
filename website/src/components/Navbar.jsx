import React, { useState } from "react";

import PropTypes from "prop-types";
import styles from "./Navbar.module.scss";

const Navbar = ({ siteTitle }) => {
  const [nightMode, setNightMode] = useState(false);

  const handleChange = e => {
    setNightMode(!nightMode);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__items}>
        <a href="#" className={styles.logo}>
          {siteTitle}
        </a>

        <div className={styles.navbar__itemsRight}>
          <nav className={styles.navLinks}>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;
