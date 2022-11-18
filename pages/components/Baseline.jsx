import React from "react";
import styles from "../../styles/Baseline.module.scss";

const Baseline = (props) => {
  const { number } = props;
  return (
    <>
      <div className={styles.wrap}>
        <p>{number}</p>
        <div></div>
      </div>
    </>
  );
};

export default Baseline;
