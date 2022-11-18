import Image from "next/image";
import React from "react";
import styles from "../../styles/skillset.module.scss";

const Skillset = (props) => {
  const { imageUrl, skillName } = props;
  return (
    <div className={styles.skill}>
      <figure>
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="contain"
          alt="language_logo"
        />
      </figure>
      <p>{skillName}</p>
    </div>
  );
};

export default Skillset;
