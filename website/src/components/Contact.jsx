import React from "react";
import PDF from "../assets/files/Resume.jsx";

import { Icon } from "antd";

import styles from "./Contact.module.scss";

function Contact({}) {
  return (
    <section style={{ minHeight: "969px" }}>
      <div className={styles.contact}>
        <p className={styles.title}> Contact </p>
        <hr />
        <br />
        <div className={styles.logos}>
          <a href="https://github.com/NeilWong">
            <Icon type="github" style={{ fontSize: "56px" }} />
          </a>
          <a href="https://www.linkedin.com/in/neilkenwong/">
            <Icon type="linkedin" style={{ fontSize: "56px" }} />
          </a>
          <PDF item={<Icon type="file-pdf" style={{ fontSize: "56px" }} />} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
