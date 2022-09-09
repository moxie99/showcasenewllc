import React from "react";

import styles from "../styles/Global";
import assets from "../assets";

const FeaturedCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            The New LLC
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            Our Core Area of Specialty are:{" "}
          </p>
        </div>
        <div className={`${styles.flexWrap}`}>
          <FeaturedCard iconText="Web3" iconUrl={assets.web3} />
          <FeaturedCard iconText="NFT" iconUrl={assets.NFT} />
          <FeaturedCard
            iconText="Business Transformation"
            iconUrl={assets.transform}
          />
          <FeaturedCard
            iconText="Creative Consultant"
            iconUrl={assets.consultant}
          />
          <FeaturedCard iconText="DAO" iconUrl={assets.DAO} />
          <FeaturedCard iconText="Writer" iconUrl={assets.writer} />
          <FeaturedCard
            iconText="Behavior Driven Development"
            iconUrl={assets.behavior}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
