import React from "react";

import Head from "next/head";

import { GetStaticProps } from "next";

import styles from "./about.module.scss";
import { api } from "../../services/api";

type AboutProps = {
  about: string;
};

export default function About({ about }: AboutProps) {
  return (
    <div className={styles.about}>
      <Head>
        <title>Sobre | MSB DevOps</title>
      </Head>
      <h1>Sobre</h1>
      <p>{about}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("about", {});

  return {
    props: {
      about: data.description,
    },
    revalidate: 60 * 60 * 8,
  };
};
