import React from "react";
import UnderMv from "./components/underMv";
import styles from "../styles/common.module.scss";
import ThreeColumn from "./components/ThreeColumn";

const works = () => {
  return (
    <>
      <UnderMv title="Works" imageUrl="/images/human.jpg" />
      <section className={styles.wrap}>
        <ul className={`${styles.mockup} ${styles.works}`}>
          <li>
            <ThreeColumn
              imageUrl="/images/mockup.webp"
              site_title={`高橋工業株式会社様\nコーポレートサイト`}
              desc={`HTML/CSS/JavaScript/WordPress\n制作期間:４日間`}
            />
          </li>
          <li>
            <ThreeColumn
              imageUrl="/images/mockup.webp"
              site_title={`高橋工業株式会社様\nコーポレートサイト`}
              desc={`HTML/CSS/JavaScript/WordPress\n制作期間:４日間`}
            />
          </li>
          <li>
            <ThreeColumn
              imageUrl="/images/mockup.webp"
              site_title={`高橋工業株式会社様\nコーポレートサイト`}
              desc={`HTML/CSS/JavaScript/WordPress\n制作期間:４日間`}
            />
          </li>
          <li>
            <ThreeColumn
              imageUrl="/images/mockup.webp"
              site_title={`高橋工業株式会社様\nコーポレートサイト`}
              desc={`HTML/CSS/JavaScript/WordPress\n制作期間:４日間`}
            />
          </li>
          <li>
            <ThreeColumn
              imageUrl="/images/mockup.webp"
              site_title={`高橋工業株式会社様\nコーポレートサイト`}
              desc={`HTML/CSS/JavaScript/WordPress\n制作期間:４日間`}
            />
          </li>
          <li>
            <ThreeColumn
              imageUrl="/images/mockup.webp"
              site_title={`高橋工業株式会社様\nコーポレートサイト`}
              desc={`HTML/CSS/JavaScript/WordPress\n制作期間:４日間`}
            />
          </li>
          <li>
            <ThreeColumn
              imageUrl="/images/mockup.webp"
              site_title={`高橋工業株式会社様\nコーポレートサイト`}
              desc={`HTML/CSS/JavaScript/WordPress\n制作期間:４日間`}
            />
          </li>
          <li>
            <ThreeColumn
              imageUrl="/images/mockup.webp"
              site_title={`高橋工業株式会社様\nコーポレートサイト`}
              desc={`HTML/CSS/JavaScript/WordPress\n制作期間:４日間`}
            />
          </li>
          <li>
            <ThreeColumn
              imageUrl="/images/mockup.webp"
              site_title={`高橋工業株式会社様\nコーポレートサイト`}
              desc={`HTML/CSS/JavaScript/WordPress\n制作期間:４日間`}
            />
          </li>
        </ul>
      </section>
    </>
  );
};

export default works;
