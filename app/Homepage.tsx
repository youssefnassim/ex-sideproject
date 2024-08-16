import type { Post } from "utils/types";
import PostFeed from "components/PostFeed";
import { Newsletter } from "components/Newsletter";
import { Schoolbell } from "next/font/google";
import Header from "components/Header";

const logoFont = Schoolbell({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Homepage = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="py-7 px-4 md:px-10">
      <Header />
      <main className="">
        <PostFeed
          posts={posts}
          insertAt={{
            element: <Newsletter />,
            at: 1,
          }}
          filterable
        />
      </main>
    </div>
  );
};

export default Homepage;
