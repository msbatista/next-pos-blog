import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <img src="/user.svg" alt="MsbDevOps" />
      <div className={styles.wrapper}>
        <div className={styles.menuContainer}>
          <Link href="/">
            <button type="button">Blog</button>
          </Link>
          <Link href="/about">
            <button type="button">Sobre</button>
          </Link>
          <Link href="/description">
            <button type="button">Descrição</button>
          </Link>
        </div>
        <div className={styles.blogDescriptionWrapper}>
          <span>Marcelo Batista</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </header>
  );
};
