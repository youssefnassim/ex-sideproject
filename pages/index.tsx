import type { InferGetStaticPropsType, NextPage } from "next";
import FilterablePostFeed from "components/FilterablePostFeed";
import GreenEmojiFace from "components/GreenEmojiFace";
import { getAllPosts } from "utils/postFetchers";
import Link from "next/link";
import { useRouter } from "next/router";
import PageSwitcher from "components/PageSwitcher";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  const router = useRouter();

  return (
    <div className="mb-32">
      <header className="pt-20 w-3/5 mx-auto mb-10 flex flex-wrap justify-center">
        <div className="w-full font-['marydale'] font-bold uppercase text-[55px] text-center leading-none tracking-tighter flex justify-center">
          Boring <br />
          Stuff
        </div>
      </header>
      <main className="w-1/2 mx-auto relative">
        <GreenEmojiFace />
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
