import React from "react";
import { Post } from "utils/types";
import Checkbox from "components/Checkbox";
import PostCard from "components/PostCard";
import useMultiCheckbox, { MultiCheckboxState } from "hooks/useMultiCheckbox";

const tags = [
  { name: "TypeScript", color: "text-blue-500" },
  { name: "Git", color: "text-orange-500" },
  { name: "Web", color: "text-green-500" },
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
      <div className="text-xl md:text-2xl mx-auto text-center uppercase font-medium mb-2">
        {tags.map((tag, i) => (
          <React.Fragment key={tag.name}>
            <Checkbox
              {...register(tag.name)}
              disabled={!leftPossibleTags.includes(tag.name)}
            />
            {(i + 1) % 3 === 0 ? <br /> : ""}
            <span
              className={`${
                !leftPossibleTags.includes(tag.name) && "opacity-20"
              }`}
            >
              {i < tags.length - 1 && (i + 1) % 3 !== 0 ? " / " : ""}
            </span>
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
