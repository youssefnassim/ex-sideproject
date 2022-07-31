import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { ParsedUrlQuery } from "querystring";

const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  frontMatter,
  mdxSource,
  slug,
}) => {
  console.log("props", frontMatter);
  return <MDXRemote {...mdxSource} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("_posts"));

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

type PostProps = {
  frontMatter: {
    [key: string]: any;
  };
  slug: string;
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
};

type Params = ParsedUrlQuery & {
  slug: string;
};

export const getStaticProps: GetStaticProps<PostProps, Params> = async (
  context
) => {
  const { slug } = context.params!;

  const markdownWithMeta = fs.readFileSync(
    path.join("_posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export default Post;
