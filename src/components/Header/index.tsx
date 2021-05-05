import React from "react";
import { BlogHeaderProps } from "../../model/BlogHeaderProps";

import styles from "./styles.module.scss";

export type HeaderProps = {
  blogInfo: BlogHeaderProps,
}

export const Header = ({blogInfo}: HeaderProps) => {
  return (
    <header className={styles.headerContainer}>
      <img src="/capivara.svg" alt="CapVaraDev" />
      <div className={styles.wrapper}>
        <div className={styles.menuContainer}>
          <button type="button">Blog</button>
          <button type="button">Sobre</button>
          <button type="button">Descrição</button>
        </div>
        <div className={styles.blogDescriptionWrapper}>
          <h1>{blogInfo.author}</h1>
          <p>{blogInfo.intro}</p>
        </div>
      </div>
    </header>
  );
};