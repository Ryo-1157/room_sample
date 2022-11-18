import React from "react";
import styles from "../../styles/columnlist.module.scss";

const ColumnList = (props) => {
  const { title, desc } = props;
  return (
    <dl className={styles.dl}>
      <dt>{title}</dt>
      <dd>{desc}</dd>
    </dl>
  );
};

export default ColumnList;
