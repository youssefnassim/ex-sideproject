import React, { useCallback } from "react";
import { Post } from "utils/types";
import Checkbox from "components/Checkbox";
import PostCard from "components/PostCard";
import useMultiCheckbox, { MultiCheckboxState } from "hooks/useMultiCheckbox";

const tags = [
  "React",
  "TypeScript",
  "Web development",
  "tRPC",
  "JavaScript",
  "HTML",
];

export default function FilterablePostFeed({ posts }: { posts: Post[] }) {
  const { register, getValue, state } = useMultiCheckbox({
    defaultValue: false,
  });

  const selectedTags = Object.entries(getValue())
    .filter((v) => v[1])
    .map((v) => v[0]);

  const filteredPosts =
    (state === MultiCheckboxState.UNCHECKED && posts) ||
    posts.filter((post) =>
      selectedTags.every((tag) => post.frontMatter.tags?.includes(tag))
    );

  const leftPossibleTags = Array.from(
    new Set(filteredPosts.flatMap((post) => post.frontMatter.tags))
  );

  return (
    <>
      <div className="text-xl md:text-2xl text-center uppercase font-medium mb-7">
        {tags.map((tag, i) => (
          <React.Fragment key={tag}>
            <Checkbox
              {...register(tag)}
              disabled={!leftPossibleTags.includes(tag)}
            />
            {i < tags.length - 1 ? " / " : ""}
          </React.Fragment>
        ))}
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
