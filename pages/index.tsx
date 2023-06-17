import type { InferGetStaticPropsType, NextPage } from "next";
import FilterablePostFeed from "components/FilterablePostFeed";
import { getAllPosts } from "utils/postFetchers";
import Themetoggler from "components/ThemeToggler";
import InboxDrawing from "../public/inbox-drawing.svg";
import EmailDrawing from "../public/email-drawing.svg";
import WebLogsDrawing from "../public/weblogs-drawing.svg";
import TwitterDrawing from "../public/twitter-drawing.svg";
import GithubDrawing from "../public/github-drawing.svg";
import SubscribeDrawing from "../public/subscribe-drawing.svg";
import CuteTile from "components/CuteTile";
import Contact from "components/Contact";
import Link from "next/link";
import GreenEmojiFace from "components/GreenEmojiFace";
import CopiableText from "components/CopiableText";

const LINK =
  "border-b-4 border-transparent hover:border-b-4 hover:border-neutral-800 dark:hover:border-neutral-500 transition";
const PICTOGRAM =
  "h-[70px] [&_path]:stroke-neutral-800/80 [&>path]:fill-neutral-800/80 dark:[&_path]:stroke-neutral-600 dark:[&>path]:fill-neutral-600";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <div className="py-20">
      <Themetoggler />
      <header className="mx-auto mb-10 flex justify-center">
        <div className="text-center font-['marydale'] font-[700] -rotate-2 uppercase text-4xl md:text-[55px] leading-none tracking-tight bg-clip-text- bg-gradient-to-t- from-[#aaa]- text-fill-color-transparent---">
          Frontend Sucks
        </div>
      </header>

      <main className="flex flex-col gap-3 px-2 xl:w-1/2 md:w-3/5 mx-auto text-center">
        <GreenEmojiFace className="h-[140px] md:h-[160px] fixed top-[80px] right-[35%] translate-x-[65%] md:translate-x-[35%] hidden" />
        <h2 className="uppercase text-xl md:text-2xl font-bold">
          Latest posts
        </h2>
        <FilterablePostFeed posts={posts} />
        <div className="mt-10">
          <CuteTile
            pictogram={<EmailDrawing className={PICTOGRAM} />}
            label="Get in touch"
          />
        </div>
        <h2 className="uppercase text-xl md:text-2xl font-bold">
          <Contact />
        </h2>
        <h2 className="uppercase text-xl md:text-2xl font-bold">
          <Link legacyBehavior href="https://twitter.com/youssef_nassim">
            <a className="border-b-4 border-transparent hover:border-b-4 hover:border-neutral-800/80 dark:hover:border-neutral-500 transition">
              Twitter
            </a>
          </Link>
        </h2>
        <h2 className="uppercase text-xl md:text-2xl font-bold">
          <Link legacyBehavior href="https://twitter.com/youssef_nassim">
            <a className="border-b-4 border-transparent hover:border-b-4 hover:border-neutral-800/80 dark:hover:border-neutral-500 transition">
              Github
            </a>
          </Link>
        </h2>
        <h2 className="uppercase text-xl md:text-2xl font-bold">
          <Link legacyBehavior href="/newsletter">
            <a className="border-b-4 border-transparent hover:border-b-4 hover:border-neutral-800/80 dark:hover:border-neutral-500 transition">
              Newsletter
            </a>
          </Link>
        </h2>
      </main>
    </div>
  );
};

export const getStaticProps = () => {
  const posts = getAllPosts()
    .filter((post) => post.frontMatter.status === "PUBLISHED")
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
