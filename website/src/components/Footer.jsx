import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        Copyright © {new Date().getFullYear()} Neil Wong. Built with
        {` `}Gatsby.
      </div>
    </footer>
  );
};

export default Footer;
