import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import styles from "./article.module.scss";
import { api } from "../../services/api";
import { ArticleProps } from "../../model/ArticleProps";

type ArticleType = {
  article: ArticleProps;
};

export default function Article({ article }: ArticleType) {
  return (
    <div className={styles.article}>
      <Head>
        <title>{article.title} | MSB DevOps</title>
      </Head>
      <h1>{article.title}</h1>
      <div className={styles.articleSummary}>
        <span>{article.summary}</span>
      </div>
      <div
        className={styles.articleBody}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get("articles", {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc",
    },
  });

  const paths = data.map((article) => {
    return {
      params: {
        slug: article.id,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (content) => {
  const { slug } = content.params;
  const { data } = await api.get(`articles/${slug}`, {});

  const article: ArticleProps = {
    id: data.id,
    title: data.title,
    summary: data.summary,
    content: data.content,
    publishedAt: data.published_at,
  };
  return {
    props: {
      article: article,
    },
    revalidate: 60 * 60 * 24,
  };
};
