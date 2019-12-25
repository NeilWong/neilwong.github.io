import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.structure}>
      <div className={styles.left}>
        <h1 className={styles.h1}>
          <Link to="/" className={styles.link}>
            {siteTitle}
          </Link>
        </h1>
      </div>

      <div className={styles.center}>
        <h1>About</h1>
        <h1>Projects</h1>
        <h1>Contact</h1>
      </div>

      <div className={styles.right}>
        <h1>Contact</h1>
      </div>
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
