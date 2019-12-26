import React from "react"
import PropTypes from "prop-types"

import AnimatedText from "./AnimatedText"
import styles from "./about-me.module.scss"

import { Icon } from "antd"

function AboutMe({ name, title, nouns }) {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <div className={styles.primary}>
          <p>
            {title}
            <span className={styles.name}>{name}</span>
          </p>
        </div>
        <div className={styles.secondary}>
          <>I'm a </>
          <strong>
            <AnimatedText items={nouns} />{" "}
          </strong>
          <>from San Francisco</>
        </div>
        {/* <hr className={styles.hr} /> */}
        <Icon type="down" style={{ fontSize: "48px", marginTop: "45%" }} />
        Projects
      </div>
    </div>
  )
}

AboutMe.propTypes = {
  name: PropTypes.string.isRequired,
  nouns: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default AboutMe
