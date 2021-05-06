import React from "react";
import Head from "next/head";

import styles from "./styles.module.scss";

type InfoPageProps = {
  content: string;
  title: string;
};

export function InfoPage({ content, title }: InfoPageProps) {
  return (
    <div className={styles.infoPage}>
      <Head>
        <title>{title} | MSB DevOps</title>
      </Head>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
