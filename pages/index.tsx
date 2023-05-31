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
  "h-[70px] [&_path]:stroke-[#0055ea][&>path]:fill-[#0055ea] dark:[&_path]:stroke-neutral-600 dark:[&>path]:fill-neutral-600";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <div className="py-20">
      {/* <Themetoggler /> */}
      <header className="w-3/5 mx-auto mb-10 flex justify-center hidden">
        <div className="text-center font-['marydale'] font-bold uppercase text-[55px] leading-none tracking-tighter bg-clip-text bg-gradient-to-t from-[#aaa] to-neutral-800 text-fill-color-transparent--">
          Youssef <br />
          Nassim
        </div>
      </header>
      <header className="mb-10">
        <div
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
          }}
          className="relative w-[384px] md:w-[534px] h-[80px] mx-auto animate-3D-Y-rotation font-medium uppercase text-[2.70rem] md:text-6xl darsk:text-neutral-400 leading-none tracking-tighter"
        >
          <span className="absolute bg-clip-text bg-gradient-to-t from-[#666] to-black dark:from-[#999] dark:to-neutral-600 text-fill-color-transparent">
            Youssef Nassim
          </span>
          <span
            className="absolute bg-clip-text bg-gradient-to-t from-[#666] to-black dark:from-[#999] dark:to-neutral-600 text-fill-color-transparent-"
            style={{ transform: `translateZ(1px)` }}
          >
            Youssef Nassim
          </span>
          <span
            className="absolute bg-clip-text bg-gradient-to-t from-[#666] to-black dark:from-[#999] dark:to-neutral-600 text-fill-color-transparent-"
            style={{ transform: `translateZ(2px)` }}
          >
            Youssef Nassim
          </span>
          <span
            className="absolute bg-clip-text bg-gradient-to-t from-[#666] to-black dark:from-[#999] dark:to-neutral-600 text-fill-color-transparent-"
            style={{ transform: `translateZ(3px)` }}
          >
            Youssef Nassim
          </span>
          <span
            className="absolute bg-clip-text bg-gradient-to-t from-[#666] to-black dark:from-[#999] dark:to-neutral-600 text-fill-color-transparent-"
            style={{ transform: `translateZ(4px)` }}
          >
            Youssef Nassim
          </span>
          <span
            className="absolute bg-clip-text bg-gradient-to-t from-[#666] to-black dark:from-[#999] dark:to-neutral-600 text-fill-color-transparent-"
            style={{ transform: `translateZ(5px)` }}
          >
            Youssef Nassim
          </span>
          <span
            className="absolute bg-clip-text bg-gradient-to-t from-[#666] to-black dark:from-[#999] dark:to-neutral-600 text-fill-color-transparent-"
            style={{ transform: `translateZ(6px)` }}
          >
            Youssef Nassim
          </span>
          <span
            className="absolute bg-clip-text bg-gradient-to-t from-[#666] to-black dark:from-[#999] dark:to-neutral-600 text-fill-color-transparent-"
            style={{ transform: `translateZ(7px)` }}
          >
            Youssef Nassim
          </span>
          <span
            className="absolute bg-clip-text bg-gradient-to-t from-[#666] to-black dark:from-[#999] dark:to-neutral-600 text-fill-color-transparent-"
            style={{ transform: `translateZ(8px)` }}
          >
            Youssef Nassim
          </span>
          <span
            className="absolute bg-clip-text bg-gradient-to-t from-[#666] to-black dark:from-[#999] dark:to-neutral-600 text-fill-color-transparent-"
            style={{ transform: `translateZ(9px)` }}
          >
            Youssef Nassim
          </span>
          <span
            className="absolute bg-clip-text bg-gradient-to-t from-[#666] to-black dark:from-[#999] dark:to-neutral-600 text-fill-color-transparent"
            style={{ transform: `translateZ(10px)` }}
          >
            Youssef Nassim
          </span>
        </div>
        <div className="mt-2 xl:w-1/2 md:w-3/5 mx-auto uppercase text-center text-xl md:text-2xl hidden">
          <span className="">Web developer, </span>
          Building <span className="normal-case">OFFF.TO</span>
        </div>
      </header>

      <main className="flex flex-col gap-3 px-2 xl:w-1/2 md:w-3/5 mx-auto text-center">
        <GreenEmojiFace className="h-[140px] md:h-[160px] fixed top-[80px] right-[35%] translate-x-[65%] md:translate-x-[35%] hidden" />
        <h2 className="uppercase text-2xl font-medium">Latest posts</h2>
        <FilterablePostFeed posts={posts} />
        <div className="mt-10">
          <CuteTile
            pictogram={<EmailDrawing className={PICTOGRAM} />}
            label="Get in touch"
          />
        </div>
        <h2 className="uppercase text-2xl font-medium">
          <Contact />
        </h2>
        <h2 className="uppercase text-2xl font-medium">
          <Link legacyBehavior href="https://twitter.com/youssef_nassim">
            <a className="border-b-4 border-transparent hover:border-b-4 hover:border-neutral-800 dark:hover:border-neutral-500 transition">
              Twitter
            </a>
          </Link>
        </h2>
        <h2 className="uppercase text-2xl font-medium">
          <Link legacyBehavior href="https://twitter.com/youssef_nassim">
            <a className="border-b-4 border-transparent hover:border-b-4 hover:border-neutral-800 dark:hover:border-neutral-500 transition">
              Github
            </a>
          </Link>
        </h2>
        <h2 className="uppercase text-xl md:text-2xl font-medium">
          <Link legacyBehavior href="/newsletter">
            <a className="border-b-4 border-transparent hover:border-b-4 hover:border-neutral-800 dark:hover:border-neutral-500 transition">
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
