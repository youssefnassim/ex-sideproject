"use client";

import React from "react";
import { Post } from "utils/types";
import Checkbox from "components/Checkbox";
import PostCard from "components/PostCard";
import useMultiCheckbox, { MultiCheckboxState } from "hooks/useMultiCheckbox";
import { HomeListItemLayout } from "./HomeListItemLayout";
import classNames from "classnames";

type PostFeedProps = {
  posts: Post[];
  filterable?: boolean;
  insertAt?: { element: React.ReactNode; at: number };
};

const tags = [
  { name: "React", className: "font-sans font-bold tracking-tight" },
  // { name: "Web development", className: "font-mono" },
  { name: "Web", className: "font-mono" },
  {
    name: "TypeScript",
    className: "font-sans font-light tracking-tight",
    customLabel: (
      <>
        <span className="font-bolds">Type</span>Script
      </>
    ),
  },
  { name: "Git", className: "lowercase font-mono" },
  { name: "Domains for sale", className: "font-display" },
  { name: "Indie Hacking", className: "font-extrabold" },
];

export default function FilterablePostFeed({
  posts,
  insertAt,
  filterable = false,
}: PostFeedProps) {
  const { register, getValue, state } = useMultiCheckbox({
    defaultValue: false,
  });

  const selectedTags = Object.entries(getValue())
    .filter((v) => v[1])
    .map((v) => v[0]);

  let postsTaggified = [...posts];
  if (state) {
    postsTaggified = posts.map((post) =>
      selectedTags.every((tag) => post.meta.tags?.includes(tag))
        ? { ...post, tagSelected: true }
        : {
            ...post,
            tagSelected:
              state === MultiCheckboxState.INDETERMINATE ? false : undefined,
          }
    );
  }

  const leftPossibleTags =
    selectedTags.length === 0
      ? tags.map((t) => t.name)
      : Array.from(
          new Set(
            postsTaggified
              .filter((post) => post.tagSelected)
              .flatMap((post) => post.meta.tags)
          )
        );

  return (
    <ul className="space-y-6 md:space-y-8">
      {filterable && (
        <HomeListItemLayout leftCol="FILTER:">
          {tags.map((tag, i) => (
            <Checkbox
              key={tag.name}
              {...register(tag.name)}
              disabled={!leftPossibleTags.includes(tag.name)}
              className={classNames(
                "text-xl md:text-xl font-monos font-mediums tracking-tights md:text-3xls after:content-[','] last:after:content-none after:mr-1 after:text-lg",
                false && tag.className
              )}
              label={tag.customLabel}
            />
          ))}
        </HomeListItemLayout>
      )}
      {postsTaggified.map((post, i) => {
        return (
          <>
            {insertAt && insertAt.at === i && insertAt.element}
            <PostCard key={post.slug} {...post} />
          </>
        );
      })}
    </ul>
  );
}
