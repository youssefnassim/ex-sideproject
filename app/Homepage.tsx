import type { Post } from "utils/types";
import PostFeed from "components/PostFeed";
import { Newsletter } from "components/Newsletter";
import Header from "components/Header";

const Homepage = ({ posts }: { posts: Post[] }) => {
  return (
    <PostFeed
      posts={posts}
      insertAt={{
        element: <Newsletter />,
        at: 1,
      }}
      filterable
    />
  );
};

export default Homepage;
