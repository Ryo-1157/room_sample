import React from "react";
import Link from "next/link";
import styles from "../../styles/footer.module.scss";

const Footer = (props) => {
  const { myName } = props;
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <h1>
            <Link href="/">My Portfolio</Link>
          </h1>
          <nav>
            <ul>
              <li>
                <Link href="/">TOP</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/works">Works</Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
      <small className={styles.small}>
        <p>{myName} All Rights Reserved.</p>
      </small>
    </>
  );
};

export default Footer;
