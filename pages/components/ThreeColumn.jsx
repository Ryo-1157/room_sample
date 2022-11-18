import Image from "next/image";
import React from "react";
import styles from "../../styles/threecolumn.module.scss";

const Mockup = (props) => {
  const { imageUrl, site_title, desc } = props;
  return (
    <>
      <article className={styles.mockup}>
        <figure>
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="contain"
            alt="language_logo"
          />
        </figure>
        <p className={styles.title}>{site_title}</p>
        <p className={styles.desc}>{desc}</p>
      </article>
    </>
  );
};

export default Mockup;
