import React from "react";

import { InfoPage } from "../../components/InfoPage";

import { GetStaticProps } from "next";
import { api } from "../../services/api";

type AboutProps = {
  about: string;
};

export default function About({ about }: AboutProps) {
  return (
    <InfoPage title="Sobre" content={about} />
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
