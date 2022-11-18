import React from "react";
import styles from "../../styles/normalText.module.scss";

const NormalText = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};

export default NormalText;
