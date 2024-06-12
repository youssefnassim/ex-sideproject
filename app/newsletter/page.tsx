import fs from "fs";
import path from "path";
import Link from "next/link";
import { components } from "components/MdxComponents";
import Themetoggler from "components/ThemeToggler";
import { compileMDX } from "next-mdx-remote/rsc";
import { PostMeta } from "utils/types";
import { useEffect } from "react";

async function getPage() {
  const source = fs.readFileSync(
    path.join("content/pages", "newsletter.mdx"),
    "utf-8"
  );

  const { frontmatter, content } = await compileMDX<PostMeta>({
    source,
    components,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    frontmatter,
    content,
  };
}

export default async function Newsletter() {
  const { content } = await getPage();

  return (
    <div className="mt-24 mb-32">
      <Themetoggler />
      <main className="px-2 xl:w-1/2 md:w-3/5 mx-auto relative uppercase text-center text-xl [&>p]:mb-5 font-bold">
        {content}
        <div className="fixed bottom-2 right-2 hidden">
          <Link legacyBehavior href="/">
            <a className="flex gap-1 hover:gap-2 transition-all px-2 py-1 text-3xl uppercase font-bold text-[#71FA4C]">
              <span>&larr;</span>
              <span>Exit</span>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
