import React from "react"
import PropTypes from "prop-types"

import AnimatedText from "./AnimatedText"
import styles from "./About.module.scss"

import { Icon } from "antd"

function About({ name, title, nouns }) {
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
          <>A </>
          <strong>
            <AnimatedText items={nouns} />{" "}
          </strong>
          <>from San Francisco</>
        </div>
        {/* <hr className={styles.hr} /> */}
        <p style={{ position: "absolute", top: "815px" }}>Projects</p>
        <Icon
          type="down"
          style={{ position: "absolute", fontSize: "48px", top: "850px" }}
        />
      </div>
    </div>
  )
}

About.propTypes = {
  name: PropTypes.string.isRequired,
  nouns: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default About
