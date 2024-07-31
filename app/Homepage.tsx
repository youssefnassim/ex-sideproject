import type { Post } from "utils/types";
import classNames from "classnames";

import PostFeed from "components/PostFeed";
import { HomeListItemLayout } from "components/HomeListItemLayout";
import { Newsletter } from "components/Newsletter";

const Homepage = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <header className="mb-10 md:mb-20">
        <ul
          className={classNames(
            "flex justify-between py-7 px-5 md:px-10 text-3xl"
          )}
        >
          <li>
            <div className="">Ex Side Project</div>
          </li>
          <li className="hidden md:block">Mail/Twitter</li>
        </ul>
      </header>
      <main className="px-5 md:px-10 pt-10 pb-20">
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
