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
      <div className="text-xl md:text-3xls font-mediums max-w-xl">
        <Link
          href={slug}
          className={classNames("hover:underline", {
            "line-through decoration-8 hover:line-through":
              tagSelected !== undefined && !tagSelected,
          })}
        >
          <h2 className="font-bold">{title}</h2>
          {excerpt && (
            <p
              className={classNames(
                "hiddens font-monos text-xl mt-1S text-xss text-neutrsal-400 font-mediums tracking-tights leading-snug max-w-2xl mb-1",
                {
                  "line-through decoration-8 hover:line-through":
                    tagSelected !== undefined && !tagSelected,
                }
              )}
            >
              {excerpt}
            </p>
          )}
        </Link>
      </div>
    </HomeListItemLayout>
  );
}
