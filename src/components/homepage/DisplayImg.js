import React from "react";
import styles from "./displayImage.module.css";
const DisplayImg = () => {
  return (
    <div className={styles.imgcontainer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>/stable-diffusion</p>
          <img src="./correct.png" className={styles.headerimg} alt="" srcSet />
        </div>
        <div className={styles.body}>
          <p>
            cinematic, paper cut-art, paper illustration, boat on the ocean,
            kraken beneath, colorfull, very...
          </p>
        </div>
        <div className={styles.footer}>
          <img
            src={require("../../assets/magic-wand.png")}
            alt=""
            className={styles.fimg}
          />
          <img
            src={require("../../assets/copy.png")}
            alt=""
            className={styles.fimg}
          />
          <img
            src={require("../../assets/save-instagram.png")}
            alt=""
            className={styles.fimg}
          />
          <img
            src={require("../../assets/download-to-storage-drive.png")}
            alt=""
            className={styles.fimg}
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayImg;
