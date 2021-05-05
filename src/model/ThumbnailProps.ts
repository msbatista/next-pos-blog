import { BlogHeaderProps } from "./BlogHeaderProps";
import { ArticleProps } from "./ArticleProps";

export type ThumbnailProps = {
    latestArticles: Array<ArticleProps>;
    allArticles: Array<ArticleProps>;
    blogInfo: BlogHeaderProps;
};
