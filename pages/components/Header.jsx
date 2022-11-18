import React from "react";
import Link from "next/link";
import styles from "../../styles/header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
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
    </header>
  );
};

export default Header;
