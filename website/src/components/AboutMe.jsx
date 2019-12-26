import React from "react"

import AnimatedText from "./AnimatedText"

import PropTypes from "prop-types"

import styles from "./about-me.module.scss"

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
          from San Francisco
        </div>
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
