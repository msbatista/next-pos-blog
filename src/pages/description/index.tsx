import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { api } from "../../services/api";
import styles from "./description.module.scss";

type DescriptionProps = {
  description: string;
};

export default function Description({ description }: DescriptionProps) {
  return (
    <div className={styles.description}>
      <Head>
        <title>Descrição | MSB DevOps</title>
      </Head>
      <h1>Descrição</h1>
      <p>{description}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("description", {});

  return {
    props: {
      description: data.content,
    },
    revalidate: 60 * 60 * 8,
  };
};
