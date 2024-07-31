import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMeta } from "./types";

export function getPostsByTags(tags: string[]) {
  return getAllPosts().filter((post) => {
    if (post.meta.tags) {
      return post.meta.tags.some((tag) => tags.includes(tag));
    }
    return;
  });
}

export function getAllPosts() {
  const files = fs
    .readdirSync(path.join("content/posts"))
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));

  return files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content/posts", filename),
      "utf-8"
    );
    const { data: meta } = matter(markdownWithMeta);

    return {
      meta: meta as PostMeta,
      slug: filename.split(".")[0],
    };
  });
}
