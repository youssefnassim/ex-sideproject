export type PostMeta = {
  title: string;
  excerpt: string;
  publishedAt: Date;
  updatedAt: Date;
  status: "DRAFT" | "PUBLISHED";
  tags: Array<string>;
  author: string;
};
