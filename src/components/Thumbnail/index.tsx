import React from "react";
import styles from "./styles.module.scss";

export const Thumbnail = ({title, summary}) => {
  return (
    <div className={styles.thumbnailContainer}>
      <a href="#">{title}</a>
      <p>{summary}</p>
    </div>
  );
};
