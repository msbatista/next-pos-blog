import React from "react";
import { BlogHeaderProps } from "../../model/BlogHeaderProps";

import styles from "./styles.module.scss";

export type HeaderProps = {
  blogInfo: BlogHeaderProps,
}

export const Header = ({blogInfo}: HeaderProps) => {
  return (
    <header className={styles.headerContainer}>
      <img src="/user.svg" alt="MsbDevOps"/>
      <div className={styles.wrapper}>
        <div className={styles.menuContainer}>
          <button type="button">Blog</button>
          <button type="button">Sobre</button>
          <button type="button">Descrição</button>
        </div>
        <div className={styles.blogDescriptionWrapper}>
          <span>{blogInfo.author}</span>
          <p>{blogInfo.intro}</p>
        </div>
      </div>
    </header>
  );
};
