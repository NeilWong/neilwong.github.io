import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Toggle from "./Toggle.jsx";
import styles from "./Navbar.module.scss";

const Navbar = ({ siteTitle }) => {
  const [theme, setTheme] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme ") : null
  );

  const handleToggle = () => {
    setTheme(!theme);
    switchTheme();
  };

  const switchTheme = c => {
    if (theme) {
      document.documentElement.setAttribute("date-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
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
            <Toggle handleToggle={handleToggle} />
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
