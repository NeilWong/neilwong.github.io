import PropTypes from "prop-types"
import React from "react"

import styles from "./Navbar.module.scss"

const Navbar = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.structure}>
      <a href="#" className={styles.logo}>
        {siteTitle}
      </a>
      <nav className={styles.nav}>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  </header>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
