export type PostMeta = {
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  status: "DRAFT" | "PUBLISHED";
  tags: Array<string>;
  author: string;
};
