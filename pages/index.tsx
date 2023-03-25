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
  "border-b-4 border-transparent hover:border-b-4 hover:border-neutral-900 dark:hover:border-neutral-500 transition";
const PICTOGRAM =
  "h-[70px] [&_path]:stroke-[#0055ea][&>path]:fill-[#0055ea] dark:[&_path]:stroke-neutral-600 dark:[&>path]:fill-neutral-600";

const fontVariants = [
  "uppercase",
  "italic",
  "lowercase",
  "font-sans text-2xl md:text-3xl",
  "font-bold",
];

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <div className="py-20">
      <Themetoggler />
      {/* BoriNg StuFf */}
      <header className="mb-16">
        <div className="w-full font-[serif] text-3xl md:text-4xl tracking-tighter text-center leading-none justify-center hidden">
          {"Boring stuff".split("").map((c, i) => {
            const stylesCount = Math.floor(Math.random() * 3);
            let fontStyle = "";
            for (let i = 0; i < stylesCount; i++) {
              fontStyle += ` ${fontVariants[Math.floor(Math.random() * 5)]}`;
            }
            return (
              <span key={i} className={fontStyle}>
                {c}
              </span>
            );
          })}
        </div>
        <div
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
          }}
          className="relative w-[380px] md:w-[550px] h-[80px] mx-auto animate-3D-Y-rotation font-medium uppercase text-5xl md:text-7xl text-nesutral-500 darsk:text-neutral-400 leading-none tracking-tighter"
        >
          <span className="absolute">Boring Stuff</span>
          <span className="absolute" style={{ transform: `translateZ(1px)` }}>
            Boring Stuff
          </span>
          <span className="absolute" style={{ transform: `translateZ(2px)` }}>
            Boring Stuff
          </span>
          <span className="absolute" style={{ transform: `translateZ(3px)` }}>
            Boring Stuff
          </span>
          <span className="absolute" style={{ transform: `translateZ(4px)` }}>
            Boring Stuff
          </span>
          <span className="absolute" style={{ transform: `translateZ(5px)` }}>
            Boring Stuff
          </span>
          <span className="absolute" style={{ transform: `translateZ(6px)` }}>
            Boring Stuff
          </span>
          <span className="absolute" style={{ transform: `translateZ(7px)` }}>
            Boring Stuff
          </span>
          <span className="absolute" style={{ transform: `translateZ(8px)` }}>
            Boring Stuff
          </span>
          <span className="absolute" style={{ transform: `translateZ(9px)` }}>
            Boring Stuff
          </span>
          <span className="absolute" style={{ transform: `translateZ(10px)` }}>
            Boring Stuff
          </span>
        </div>
      </header>

      <main className="flex flex-col gap-3 px-2 xl:w-1/2 md:w-3/5 mx-auto text-center">
        <GreenEmojiFace className="h-[140px] md:h-[160px] fixed right-[35%] translate-x-[65%] md:translate-x-[35%]" />
        <FilterablePostFeed posts={posts} />
        <div className="mt-10">
          <CuteTile
            pictogram={<EmailDrawing className={PICTOGRAM} />}
            label="Get in touch"
          />
        </div>
        <h2 className="uppercase text-xl md:text-2xl font-medium">
          <Contact />
        </h2>
        <h2 className="uppercase text-xl md:text-2xl font-medium">
          <Link legacyBehavior href="https://twitter.com/youssef_nassim">
            <a className="border-b-4 border-transparent hover:border-b-4 hover:border-black dark:hover:border-neutral-500 transition">
              Twitter
            </a>
          </Link>
        </h2>
        <h2 className="uppercase text-xl md:text-2xl font-medium">
          <Link legacyBehavior href="https://twitter.com/youssef_nassim">
            <a className="border-b-4 border-transparent hover:border-b-4 hover:border-black dark:hover:border-neutral-500 transition">
              Github
            </a>
          </Link>
        </h2>
        <h2 className="uppercase text-xl md:text-2xl font-medium">
          <Link legacyBehavior href="/newsletter">
            <a className="border-b-4 border-transparent hover:border-b-4 hover:border-black dark:hover:border-neutral-500 transition">
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
