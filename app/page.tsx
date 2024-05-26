import Homepage from "./homepage";
import { getAllPosts } from "utils/postFetchers";

async function getPosts() {
  return getAllPosts()
    .filter((post) => post.frontMatter.status === "PUBLISHED")
    .sort(
      (a, b) =>
        Number(new Date(b.frontMatter.publishedAt)) -
        Number(new Date(a.frontMatter.publishedAt))
    );
}

export default async function Page() {
  const posts = await getPosts();
  return <Homepage posts={posts} />;
}
