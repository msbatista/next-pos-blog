import React from "react";

import { InfoPage } from "../../components/InfoPage";

import { GetStaticProps } from "next";
import { api } from "../../services/api";

type DescriptionProps = {
  description: string;
};

export default function Description({ description }: DescriptionProps) {
  return <InfoPage title="Descrição" content={description} />;
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
