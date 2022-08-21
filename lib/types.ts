export type PostMeta = {
  title: string;
  excerpt: string;
  date: Date;
  status: "DRAFT" | "PUBLISHED";
  tags: Array<string>;
  author: string;
};
