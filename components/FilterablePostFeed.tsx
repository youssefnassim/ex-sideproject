import React from "react";
import { Post } from "utils/types";
import Checkbox from "components/Checkbox";
import PostCard from "components/PostCard";
import useMultiCheckbox from "hooks/useMultiCheckbox";

const tags = [
  "React",
  "TypeScript",
  "Web development",
  "tRPC",
  "JavaScript",
  "HTML",
];

export default function FilterablePostFeed({ posts }: { posts: Post[] }) {
  const { register, selectAll, state, getValue } = useMultiCheckbox({
    defaultValue: true,
  });

  const filteredPosts = posts.filter(
    (post) =>
      post.frontMatter.tags &&
      post.frontMatter.tags.some((tag) => getValue(tag))
  );

  return (
    <>
      <div className="text-center uppercase hp-uppercase-text font-medium mb-7">
        <span className="font-['marydale'] font-bold hidden">(</span>Remove
        stuff tagged in&nbsp;
        {tags.map((tag, i) => (
          <React.Fragment key={tag}>
            {i === tags.length - 1 && "or "}
            <Checkbox {...register(tag)} />
            {i < tags.length - 1 && " "}
          </React.Fragment>
        ))}
        <span className="font-['marydale'] font-bold hidden">)</span>
      </div>
      <div className="text-center">
        {filteredPosts.map((post, i) => (
          <PostCard
            key={`${post.slug}-${i}`}
            slug={post.slug}
            {...post.frontMatter}
          />
        ))}
      </div>
    </>
  );
}
