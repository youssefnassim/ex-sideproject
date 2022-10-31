import type { InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import ArrowBack from "../public/arrow-back.svg";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { components } from "components/MdxComponents";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  mdxSource,
}) => {
  return (
    <div className="mb-32">
      <div className="w-[100px] top-2.5 left-2.5 fixed">
        <Link href="/links">
          <a className="flex font-['marydale'] uppercase font-bold text-xl bg-white dark:bg-black">
            <ArrowBack className="dark:[&>g>path]:stroke-neutral-600" />
            Back
          </a>
        </Link>
      </div>

      <main className="px-2 xl:w-1/2 md:w-3/5 mt-24 mx-auto relative uppercase text-center text-xl [&>p]:mb-5 text-lg font-medium">
        <MDXRemote components={components} {...mdxSource} />
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const markdownWithMeta = fs.readFileSync(
    path.join("content/pages", "newsletter.mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      mdxSource,
    },
  };
};

export default Home;
