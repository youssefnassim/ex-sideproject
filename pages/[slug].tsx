import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { GetStaticPaths, InferGetStaticPropsType } from "next";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { ParsedUrlQuery } from "querystring";
import { PostMeta } from "utils/types";
import { format } from "date-fns";
import { components } from "components/MdxComponents";
import rehypePrettyCode from "rehype-pretty-code";
import { options, rehypePrettyCodeStyles } from "utils/rehypePrettyCode";
import ArrowBack from "../public/arrow-back.svg";
import Link from "next/link";
import Themetoggler from "components/ThemeToggler";

type PostProps = InferGetStaticPropsType<typeof getStaticProps>;

const Post: NextPage<PostProps> = ({ frontMatter, mdxSource }) => {
  const publishedAt = new Date(frontMatter.publishedAt);

  return (
    <main className="mt-2 mb-8">
      <Themetoggler />
      <div className="w-[100px] top-2.5 left-2.5 fixed hidden">
        <Link href="/">
          <a className="flex font-['marydale'] uppercase font-bold text-xl">
            <ArrowBack className="dark:[&>g>path]:stroke-neutral-500" />
            Index
          </a>
        </Link>
      </div>
      <article className="py-16 px-4 xl:w-[830px] dark:xl:w-[850px] lg:w-3/5 md:w-2/3 mx-auto">
        <h1 className="uppercase text-2xl font-medium mb-6 text-center">
          {frontMatter.title}
        </h1>
        <p className="uppercase text-xl font-medium mb-5 text-center">
          <time dateTime={format(publishedAt, "y-MM-dd")}>
            {format(publishedAt, "d LLLL y")}
            {`—${frontMatter.readingTime} min read`}
          </time>
        </p>
        {frontMatter.tags && (
          <p className="uppercase text-xl font-medium mb-8 text-center">
            Tagged in:{" "}
            {frontMatter.tags.map(
              (tag, i) =>
                `${tag}${i + 1 !== frontMatter.tags?.length ? ", " : ""}`
            )}
          </p>
        )}
        <div className="[&>p]:mb-5 text-sm dark:font-medium">
          <MDXRemote components={components} {...mdxSource} />
        </div>
      </article>
      <div className="flex fixed bottom-4 right-4 bg-neutral-500 rounded-full shadow-xl">
        <Link href="/">
          <a className=" text-white px-2 py-1 text-xs uppercase font-medium rounded-full">
            Index
          </a>
        </Link>
      </div>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("content/posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

type Params = ParsedUrlQuery & {
  slug: string;
};

export const getStaticProps = async (
  context: GetStaticPropsContext<Params>
) => {
  const { slug } = context.params!;

  const markdownWithMeta = fs.readFileSync(
    path.join("content/posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, options], [rehypePrettyCodeStyles]],
    },
  });

  return {
    props: {
      frontMatter: frontMatter as PostMeta,
      slug,
      mdxSource,
    },
  };
};

export default Post;
