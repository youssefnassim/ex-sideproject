import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostCard from "components/PostCard";
import GreenEmojiFace from "components/GreenEmojiFace";
import { PostMeta } from "lib/types";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  console.log("posts", posts);
  return (
    <>
      <header className="w-3/5 mx-auto mt-16 mb-10 flex justify-center">
        <div className="font-['marydale'] font-bold uppercase text-[55px] leading-none tracking-tighter bg-clip-text bg-gradient-to-t from-[#aaa] to-black text-fill-color-transparent">
          Boring <br />
          Stuff—
        </div>
      </header>
      <main className="w-3/5 mx-auto relative">
        <GreenEmojiFace />
        <div className="text-center uppercase hp-uppercase-text font-medium mb-7">
          <p className="mb-7">
            This website is a work in progress, <br />
            which can stay this way though.
          </p>
          <p>Find links to recent rants below</p>
        </div>
        <div className="text-center">
          {posts.map((post, i) => (
            <PostCard
              key={`${post.slug}-${i}`}
              slug={post.slug}
              {...post.frontMatter}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export const getStaticProps = () => {
  const files = fs.readdirSync(path.join("_posts"));

  const posts = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("_posts", filename),
        "utf-8"
      );
      const { data: frontMatter } = matter(markdownWithMeta);

      return {
        frontMatter: frontMatter as PostMeta,
        slug: filename.split(".")[0],
      };
    })
    .sort(
      (a, b) =>
        Number(new Date(b.frontMatter.publishedAt)) -
        Number(new Date(a.frontMatter.publishedAt))
    );

  return {
    props: {
      posts,
    },
  };
};

export default Home;
