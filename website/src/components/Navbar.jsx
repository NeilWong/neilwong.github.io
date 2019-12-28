import React from "react";
import PropTypes from "prop-types";

import Toggle from "./Toggle.jsx";
import styles from "./Navbar.module.scss";

const Navbar = ({ siteTitle, handleToggle }) => {
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
            <Toggle handleToggle={handleToggle} />
          </nav>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  siteTitle: PropTypes.string,
  handleToggle: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;
