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
import arrowBack from "../public/arrow-back.svg";
import Link from "next/link";

type PostProps = InferGetStaticPropsType<typeof getStaticProps>;

const Post: NextPage<PostProps> = ({ frontMatter, mdxSource, slug }) => {
  const publishedAt = new Date(frontMatter.publishedAt);

  return (
    <main className="mt-2 mb-8">
      <div className="w-[100px] top-2.5 left-2.5 fixed">
        <Link href="/">
          <a className="flex font-['marydale'] uppercase font-bold text-xl">
            <Image src={arrowBack} alt="arrow-back" />
            Index
          </a>
        </Link>
      </div>
      <article className="w-1/2 mx-auto">
        <h1 className="uppercase text-2xl font-medium mt-16 mb-6 text-center">
          {frontMatter.title}
        </h1>
        <p className="uppercase text-xl font-medium mb-5 text-center">
          <time dateTime={format(publishedAt, "y-MM-dd")}>
            {format(publishedAt, "d LLLL y")}
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
        <MDXRemote components={components} {...mdxSource} />
      </article>
    </main>
  );
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

type Params = ParsedUrlQuery & {
  slug: string;
};

export const getStaticProps = async (
  context: GetStaticPropsContext<Params>
) => {
  const { slug } = context.params!;

  const markdownWithMeta = fs.readFileSync(
    path.join("_posts", slug + ".mdx"),
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
