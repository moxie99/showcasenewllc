import React from "react";

import styles from "../styles/Global";
import assets from "../assets";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Coming Soon
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Stay Tuned</p>

          <button className={styles.btnPrimary}>Contact Us</button>
          <div className={styles.flexCenter}>
            <img
              src={assets.homeHero}
              alt="react_out"
              className={styles.fullImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
