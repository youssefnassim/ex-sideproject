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
        <span className="font-bold">Type</span>Script
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
    <ul className="space-y-16 md:space-y-20">
      {filterable && (
        <HomeListItemLayout leftCol="FILTER:">
          <div className="flex flex-wrap items-baseline gap-2 md:w-[600px]">
            {tags.map((tag, i) => (
              <div
                key={tag.name}
                className="after:content-[','] last:after:content-none after:text-3xl"
              >
                <Checkbox
                  {...register(tag.name)}
                  disabled={!leftPossibleTags.includes(tag.name)}
                  className={classNames("text-2xl md:text-3xl", tag.className)}
                  label={tag.customLabel}
                />
              </div>
            ))}
          </div>
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
