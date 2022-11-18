import React from "react";
import Image from "next/image";
import styles from "../../styles/underMv.module.scss";

const UnderMv = (props) => {
  const { title, imageUrl } = props;
  return (
    <div className={styles.mv}>
      <figure>
        <Image src={imageUrl} width={1440} height={400} alt="unset" />
        <h2>{title}</h2>
      </figure>
    </div>
  );
};

export default UnderMv;
