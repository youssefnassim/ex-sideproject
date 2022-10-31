import type { InferGetStaticPropsType, NextPage } from "next";
import FilterablePostFeed from "components/FilterablePostFeed";
import GreenEmojiFace from "components/GreenEmojiFace";
import PageSwitcher from "components/PageSwitcher";
import { getAllPosts } from "utils/postFetchers";
import Themetoggler from "components/ThemeToggler";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <div className="py-20">
      <Themetoggler />
      <GreenEmojiFace className="w-[150px] md:w-[200px] fixed top-[25%] right-[10%] lg:right-[25%]" />
      <header className="mx-auto mb-10 flex flex-wrap justify-center">
        <div className="w-full font-['marydale'] font-bold uppercase text-5xl text-[#71FA4C] text-center leading-none tracking-tighter flex justify-center">
          Boring <br />
          Stuff
        </div>
      </header>
      <main className="px-2 xl:w-1/2 md:w-3/5 mx-auto relative">
        <FilterablePostFeed posts={posts} />
      </main>
      <PageSwitcher />
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
