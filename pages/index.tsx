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

const LINK =
  "border-b-4 border-transparent hover:border-b-4 hover:border-neutral-900 dark:hover:border-neutral-500 transition";
const PICTOGRAM =
  "h-[70px] dark:[&_path]:stroke-neutral-600 dark:[&>path]:fill-neutral-600";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <div className="py-20">
      <Themetoggler />
      <header className="mx-auto mb-10 flex flex-wrap justify-center">
        <div className="w-full font-['marydale'] font-bold uppercase text-5xl text-neutral-500 dark:text-neutral-400 text-center leading-none tracking-tighter justify-center bg-clip-text bg-gradient-to-b dark:bg-gradient-to-t from-[#aaa] to-black dark:to-white text-fill-color-transparent">
          Boring <br />
          Stuff
        </div>
      </header>
      {/* Social Links */}
      <div className="text-center mb-7">
        <CuteTile
          pictogram={
            <SubscribeDrawing
              className={`${PICTOGRAM} dark:[&_circle]:fill-neutral-600`}
            />
          }
          label="Social Links"
        />
        <div className="flex flex-row flex-wrap gap-4 justify-center mt-5">
          <CuteTile
            pictogram={<TwitterDrawing className={PICTOGRAM} />}
            label={
              <Link href="https://twitter.com/youssef_nassim">
                <a className={LINK}>Twitter</a>
              </Link>
            }
          />
          <CuteTile
            pictogram={<InboxDrawing className={PICTOGRAM} />}
            label={
              <Link href="/newsletter">
                <a className={LINK}>Newsletter</a>
              </Link>
            }
          />
          <CuteTile
            pictogram={<GithubDrawing className={PICTOGRAM} />}
            label={
              <Link href="https://github.com/youssefnassim">
                <a className={LINK}>Github</a>
              </Link>
            }
          />
        </div>
      </div>
      {/* Social Links End */}
      <main className="flex flex-col gap-3 px-2 xl:w-1/2 md:w-3/5 mx-auto text-center">
        <CuteTile
          pictogram={<WebLogsDrawing className={PICTOGRAM} />}
          label="Weblogs by topic"
        />
        <FilterablePostFeed posts={posts} />
        <CuteTile
          pictogram={<EmailDrawing className={PICTOGRAM} />}
          label={<Contact />}
        />
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
