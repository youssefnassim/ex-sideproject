import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { PostMeta } from "utils/types";
import { format } from "date-fns";
import rehypePrettyCode from "rehype-pretty-code";
import { options, rehypePrettyCodeStyles } from "utils/rehypePrettyCode";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import ArrowBack from "../../public/arrow-back.svg";
import Link from "next/link";
import { HEADING_ANCHOR } from "utils/constants";
import { components } from "components/MdxComponents";

type PostPageProps = {
  params: Awaited<ReturnType<typeof generateStaticParams>>[number];
};

async function getPost(slug: string) {
  const source = fs.readFileSync(
    path.join("content/posts", slug + ".mdx"),
    "utf-8"
  );

  const { frontmatter, content } = await compileMDX<PostMeta>({
    source,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [rehypePrettyCode, options],
          rehypePrettyCodeStyles,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: {
                className: [HEADING_ANCHOR],
                target: "_self",
              },
            },
          ],
        ],
      },
    },
  });

  return {
    frontmatter,
    content,
  };
}

export async function generateMetadata({ params: { slug } }: PostPageProps) {
  const post = await getPost(slug);

  return {
    title: `Ex Side Project - ${post.frontmatter.title}`,
  };
}

export default async function PostPage({ params: { slug } }: PostPageProps) {
  const { frontmatter, content } = await getPost(slug);
  const publishedAt = new Date(frontmatter.publishedAt);

  return (
    <main className="mt-2 mb-8">
      <div className="w-[100px] top-2.5 left-2.5 fixed hidden">
        <Link legacyBehavior href="/">
          <a className="flex font-['marydale'] uppercase font-bold text-xl">
            <ArrowBack className="dark:[&>g>path]:stroke-neutral-500" />
            Index
          </a>
        </Link>
      </div>
      <article className="py-16 px-4 md:px-10 max-w-[850px] lg:w-3/5md:w-2/3 mx-auto">
        <h1 className="uppercase text-[1.7rem] font-bold mb-6 text-center">
          {frontmatter.title}
        </h1>
        <p className="uppercase fonts-['system-ui'] text-xl font-bold mb-8 text-center">
          <time dateTime={format(publishedAt, "y-MM-dd")}>
            {format(publishedAt, "d LLLL y")}
            {` — ${frontmatter.readingTime} min read`}
          </time>
        </p>
        {frontmatter.tags && (
          <p className="uppercase fonts-['system-ui'] text-xl font-bold mb-8 text-center hidden">
            Tagged in:{" "}
            {frontmatter.tags.map(
              (tag, i) =>
                `${tag}${i + 1 !== frontmatter.tags?.length ? ", " : ""}`
            )}
          </p>
        )}
        <div className="[&>p]:indent-5 [&>p]:mb-6 [&>p]:fonts-['Source_Serif_Pro'] [&>p]:font-bold dark:text-inherit text-base md:text-lgs">
          {content}
        </div>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("content/posts"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}
