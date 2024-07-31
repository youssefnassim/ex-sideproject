import Homepage from "./Homepage";
import { getAllPosts } from "utils/postFetchers";

async function getPosts() {
  return getAllPosts()
    .filter((post) => post.meta.status === "PUBLISHED")
    .sort(
      (a, b) =>
        Number(new Date(b.meta.publishedAt)) -
        Number(new Date(a.meta.publishedAt))
    );
}

export default async function Page() {
  const posts = await getPosts();
  return <Homepage posts={posts} />;
}
