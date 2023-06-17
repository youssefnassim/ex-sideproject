import React from "react";
import { Post } from "utils/types";
import Checkbox from "components/Checkbox";
import PostCard from "components/PostCard";
import useMultiCheckbox, { MultiCheckboxState } from "hooks/useMultiCheckbox";

const tags = [
  { name: "TypeScript", color: "text-blue-500" },
  { name: "Git", color: "text-orange-500" },
  { name: "Web", color: "text-green-500" },
  { name: "React", color: "text-blue-500" },
];

export default function FilterablePostFeed({ posts }: { posts: Post[] }) {
  const { register, getValue, state } = useMultiCheckbox({
    defaultValue: false,
  });

  const selectedTags = Object.entries(getValue())
    .filter((v) => v[1])
    .map((v) => v[0]);

  let postsTaggified = posts;
  if (state && state !== MultiCheckboxState.UNCHECKED) {
    postsTaggified = posts.map((post) =>
      selectedTags.every((tag) => post.frontMatter.tags?.includes(tag))
        ? { ...post, tagSelected: true }
        : post
    );
  }

  const leftPossibleTags =
    selectedTags.length === 0
      ? tags.map((t) => t.name)
      : Array.from(
          new Set(
            postsTaggified
              .filter((post) => post.tagSelected)
              .flatMap((post) => post.frontMatter.tags)
          )
        );

  return (
    <>
      <div className="text-xl md:text-2xl mx-auto text-center uppercase font-bold mb-2">
        {tags.map((tag, i) => (
          <React.Fragment key={tag.name}>
            <Checkbox
              {...register(tag.name)}
              disabled={!leftPossibleTags.includes(tag.name)}
            />
            {(i + 1) % 4 === 0 ? <br /> : ""}
            <span className={`${!leftPossibleTags.includes(tag.name) && ""}`}>
              {i < tags.length - 1 && (i + 1) % 4 !== 0 ? " / " : ""}
            </span>
          </React.Fragment>
        ))}
      </div>
      <div className="text-center">
        {postsTaggified.map((post, i) => (
          <PostCard
            key={`${post.slug}-${i}`}
            slug={post.slug}
            tagSelected={post.tagSelected}
            {...post.frontMatter}
          />
        ))}
      </div>
    </>
  );
}
