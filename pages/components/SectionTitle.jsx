import React from "react";
import styles from "../../styles/sectionTitle.module.scss";

const SectionTitle = (props) => {
  const { sectionText } = props;
  return (
    <>
      <h3 className={styles.text}>{sectionText}</h3>
    </>
  );
};
export default SectionTitle;
