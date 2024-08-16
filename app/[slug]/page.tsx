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
import Header from "components/Header";

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
    <div className="py-7 px-4 md:px-10">
      <Header />
      <main className="">
        <article className="flex flex-col md:flex-row">
          <div className="md:w-1/6 shrink-0">
            <h1 className="text-3xl md:text-xl font-bold">
              {frontmatter.title}
            </h1>
            <p className="fonts-['system-ui'] text-lg md:text-base italics mt-1 mb-8">
              <time dateTime={format(publishedAt, "y-MM-dd")}>
                {format(publishedAt, "LLL d, y")}
                {` — ${frontmatter.readingTime} min read`}
              </time>
            </p>
          </div>
          <div className="md:w-4/6">
            <div className="max-w-[650px] mx-auto [&>p]:indent-7s [&>p]:mb-5 [&>p]:fonts-['Source_Serif_Pro'] [&>p]:font-semibolds last:[&>p]:after:content-none [&>p]:after:content-['***']s [&>p]:after:block [&>p]:after:text-center [&>p]:afters:py-5 dark:text-inherit font-serif font-medium text-xl leading-7s">
              {content}
              {frontmatter.tags && (
                <p className="fonts-['system-ui'] text-xl font-bold mb-8 text-center hidden">
                  Tagged in:{" "}
                  {frontmatter.tags.map(
                    (tag, i) =>
                      `${tag}${i + 1 !== frontmatter.tags?.length ? ", " : ""}`
                  )}
                </p>
              )}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("content/posts"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}
