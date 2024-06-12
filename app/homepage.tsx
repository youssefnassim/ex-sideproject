import FilterablePostFeed from "components/FilterablePostFeed";
import Themetoggler from "components/ThemeToggler";
import EmailDrawing from "../public/email-drawing.svg";
import CuteTile from "components/CuteTile";
import Contact from "components/Contact";
import Link from "next/link";
import GreenEmojiFace from "components/GreenEmojiFace";
import type { Post } from "utils/types";

const LINK =
  "border-b-4 border-transparent hover:border-b-4 hover:border-neutral-800 dark:hover:border-neutral-500 transition";
const PICTOGRAM =
  "h-[70px] [&_path]:stroke-neutral-800/80 [&>path]:fill-neutral-800/80 dark:[&_path]:stroke-neutral-600 dark:[&>path]:fill-neutral-600";

const Homepage = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="py-10">
      <Themetoggler />
      <header className="mx-auto mb-14 flex justify-center">
        <div className="text-center font-['marydale'] font-[700] -rotate-2 uppercase text-4xl md:text-[30px] leading-none tracking-tight bg-clip-text- bg-gradient-to-t- from-[#aaa]- text-fill-color-transparent---">
          Ex Side Project
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
          <Link
            href="https://twitter.com/youssef_nassim"
            className="border-b-4 border-transparent hover:border-b-4 hover:border-neutral-800/80 dark:hover:border-neutral-500 transition"
          >
            Twitter
          </Link>
        </h2>
        <h2 className="uppercase text-xl md:text-2xl font-bold">
          <Link
            href="https://github.com/youssefnassim"
            className="border-b-4 border-transparent hover:border-b-4 hover:border-neutral-800/80 dark:hover:border-neutral-500 transition"
          >
            Github
          </Link>
        </h2>
        <h2 className="uppercase text-xl md:text-2xl font-bold">
          <Link
            href="/newsletter"
            className="border-b-4 border-transparent hover:border-b-4 hover:border-neutral-800/80 dark:hover:border-neutral-500 transition"
          >
            Newsletter
          </Link>
        </h2>
      </main>
    </div>
  );
};

export default Homepage;
