export type PostMeta = {
  title: string;
  styledTitle?: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  status: "DRAFT" | "PUBLISHED";
  tags?: Array<string>;
  author: string;
};

export type Post = {
  meta: PostMeta;
  slug: string;
  tagSelected?: boolean;
};
