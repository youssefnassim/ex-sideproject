import type { Post } from "utils/types";
import PostFeed from "components/PostFeed";
import { Newsletter } from "components/Newsletter";
import Header from "components/Header";

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
