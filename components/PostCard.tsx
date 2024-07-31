import Link from "next/link";
import { PostMeta } from "../utils/types";
import { format } from "date-fns";
import { HomeListItemLayout } from "./HomeListItemLayout";
import classNames from "classnames";

type PostCardProps = {
  meta: PostMeta;
  slug: string;
  tagSelected?: boolean;
};

export default function PostCard({
  meta: { title, styledTitle, publishedAt, excerpt },
  slug,
  tagSelected,
}: PostCardProps) {
  return (
    <HomeListItemLayout leftCol={format(new Date(publishedAt), "yy/MM/dd")}>
      <div className="text-2xl md:text-3xl font-esxtrabold">
        <Link
          href={slug}
          className={classNames({
            "line-through decoration-8":
              tagSelected !== undefined && !tagSelected,
          })}
        >
          {styledTitle
            ? styledTitle.split("|").map((wordWithClasses) => {
                const [word, classes = undefined] = wordWithClasses.split("::");
                return (
                  <span
                    key={`${slug}-${word}`}
                    className={classNames(classes?.trim())}
                  >
                    {word}{" "}
                  </span>
                );
              })
            : title}
        </Link>
        <p className="hidden mt-5 font-monos tracking-tights leading-snug max-w-2xl mb-10">
          {excerpt}
        </p>
      </div>
    </HomeListItemLayout>
  );
}
