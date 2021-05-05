import React, { useState } from "react";
import { Header } from "../components/Header";
import { Thumbnail } from "../components/Thumbnail";

import Head from "next/head";
import { GetServerSideProps } from "next";
import { api } from "../services/api";

import {ThumbnailProps} from "../model/ThumbnailProps";
import { BlogHeaderProps } from "../model/BlogHeaderProps";
import { ArticleProps } from "../model/ArticleProps";

import styles from "./home.module.scss";

export default function Home({
  latestArticles,
  allArticles,
  blogInfo,
}: ThumbnailProps) {
  const [showAllArticles, setShowArticles] = useState(false);

  const toggleArticles = () => setShowArticles(!showAllArticles);

  return (
    <>
      <Head>
        <title>Home | MSB DevOps</title>
      </Head>
      <Header blogInfo={blogInfo} />
      <div className={styles.homePage}>
        <section className={styles.homePageContent}>
          <h1>Últimas do blog</h1>
          {showAllArticles
            ? latestArticles.concat(allArticles).map((article) => {
                return (
                  <Thumbnail
                    key={article.id}
                    title={article.title}
                    summary={article.summary}
                  />
                );
              })
            : latestArticles.map((article) => {
                return (
                  <Thumbnail
                    key={article.id}
                    title={article.title}
                    summary={article.summary}
                  />
                );
              })}
        </section>
        <button type="button" onClick={toggleArticles}>
          {showAllArticles ? "Ver menos" : "Ver tudo"}
        </button>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const headerContent = await api.get("header", {});
  const blogInfo: BlogHeaderProps = {
    id: headerContent.data?.id,
    author: headerContent.data?.author,
    intro: headerContent.data?.intro,
    logo: headerContent.data?.logo,
  };

  const { data } = await api.get("articles", {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc",
    },
  });

  const articles: Array<ArticleProps> = data.map((article) => {
    return {
      id: article.id,
      title: article.title,
      summary: article.summary,
      content: article.content,
      publishedAt: article.published_at,
    };
  });

  const latestArticles = articles.slice(0, 3);
  const allArticles = articles.slice(3, articles.length);

  return {
    props: {
      latestArticles,
      allArticles,
      blogInfo,
    },
  };
};
