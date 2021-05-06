import React from "react";
import styles from "./styles.module.scss";

import Link from "next/link";

export type ArticleProps = {
  id: string;
  title: string;
  summary: string;
}

export const Thumbnail = ({title, summary, id}: ArticleProps) => {
  return (
    <div className={styles.thumbnailContainer}>
      <Link href="/articles/[id]" as={`/articles/${id}`}>
        <a>{title}</a>
      </Link>
      <p>{summary}</p>
    </div>
  );
};
