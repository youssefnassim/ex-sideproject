import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { PostMeta } from "utils/types";
import { format } from "date-fns";
import rehypePrettyCode from "rehype-pretty-code";
import { options, rehypePrettyCodeStyles } from "utils/rehypePrettyCode";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { HEADING_ANCHOR } from "utils/constants";
import { components } from "components/MdxComponents";
import { notFound } from "next/navigation";

type PostPageProps = {
  params: Awaited<ReturnType<typeof generateStaticParams>>[number];
};

async function getPost(slug: string) {
  let source: string | null;

  try {
    source = fs.readFileSync(
      path.join("content/posts", slug + ".mdx"),
      "utf-8"
    );
  } catch (error) {
    return null;
  }

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
    title: post
      ? `Ex Side Project - ${post.frontmatter.title}`
      : "404 Not Found",
  };
}

export default async function PostPage({ params: { slug } }: PostPageProps) {
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { content, frontmatter } = post;

  const publishedAt = new Date(frontmatter.publishedAt);

  return (
    <article className="flex flex-col xl:flex-row">
      <div className="xl:w-1/6 shrink-0">
        <h1 className="font-serif italic text-xl">{frontmatter.title}</h1>
        <p className="mt-1 mb-8">
          <time dateTime={format(publishedAt, "y-MM-dd")}>
            {format(publishedAt, "LLL d, y")}
            {` — ${frontmatter.readingTime} min read`}
          </time>
        </p>
      </div>
      <div className="xl:w-4/6">
        <div className="max-w-[650px] mx-auto [&>p]:mb-5 [&>hr]:mt-3 break-words dark:text-inherit">
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
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("content/posts"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}
