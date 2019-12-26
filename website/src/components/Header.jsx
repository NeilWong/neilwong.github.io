import PropTypes from "prop-types"
import React from "react"

import styles from "./Header.module.scss"

const Header = ({ siteTitle }) => (
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
