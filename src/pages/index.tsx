import React from "react";
import { Header } from "../components/Header";

import { GetStaticProps } from "next";
import { api } from "../services/api";
import { BlogHeaderProps } from "../model/BlogHeaderProps";

export default function Home(blogInfo: BlogHeaderProps) {
  return (
    <>
      <Header blogInfo={blogInfo}/>
      <h1>teste</h1>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("header", {});
  const header: BlogHeaderProps = {
    id: data?.id,
    author: data?.author,
    intro: data?.intro,
    logo: data?.logo,
  }
  return {
    props: header,
    revalidate: 60 * 60 * 8,
  };
};

