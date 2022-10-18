import type { InferGetStaticPropsType, NextPage } from "next";
import FilterablePostFeed from "components/FilterablePostFeed";
import GreenEmojiFace from "components/GreenEmojiFace";
import { getAllPosts } from "utils/postFetchers";
import Link from "next/link";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <div className="mt-16 mb-32">
      <header className="w-3/5 mx-auto mb-14 flex justify-center">
        <div className="fosnt-['marydale'] texst-[#71FA4C] font-bold uppercase text-[40px] leading-none tracking-tight bg-clip-text|bg-gradient-to-t|from-[#999]|to-black|text-fill-color-transparent">
          Boring Stuff
        </div>
      </header>
      <main className="w-3/5 mx-auto relative">
        <GreenEmojiFace />
        <p className="text-center uppercase hp-uppercase-text font-medium mb-7">
          My name is Youssef Nassim.
          <br />
          I fluently write bugs in TypeScript
          <br /> and rant{" "}
          <Link href="/">
            <a className="tesxt-[#94F668] after:contsent-['↩'] border-b-4 border-transparent border-dasshed border-transparent hover:border-black transition">
              about
            </a>
          </Link>{" "}
          it here:
        </p>
        <p className="text-center uppercase hp-uppercase-text font-medium mb-7 hidden">
          This website is a work in progress, <br />
          which can stay this way though.
        </p>
        <p className="text-center uppercase hp-uppercase-text font-medium mb-7 hidden">
          Jump to the{" "}
          <Link href="/">
            <a className="tesxt-[#94F668] after:content-['↩'] border-b-4 border-transparent border-dasshed border-transparent hover:border-black transition">
              articles index
            </a>
          </Link>
        </p>
        <p className="text-center uppercase hp-uppercase-text font-medium mb-7 hidden">
          Find links to recent rants below:
        </p>
        <FilterablePostFeed posts={posts} />
      </main>
    </div>
  );
};

export const getStaticProps = () => {
  const posts = getAllPosts().sort(
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
