import Link from "next/link";
import { PostMeta } from "../utils/types";
import { format } from "date-fns";
import { HomeListItemLayout } from "./HomeListItemLayout";
import classNames from "classnames";
import { ARTICLES_ROOT_PATH } from "utils/constants";

type PostCardProps = {
  meta: PostMeta;
  slug: string;
  tagSelected?: boolean;
};

export default function PostCard({
  meta: { title, publishedAt, excerpt },
  slug,
  tagSelected,
}: PostCardProps) {
  return (
    <HomeListItemLayout leftCol={format(new Date(publishedAt), "yy/MM/dd")}>
      <div className="max-w-xl">
        <Link
          href={`${ARTICLES_ROOT_PATH}/${slug}`}
          className={classNames("hover:underline", {
            "line-through decoration-8 hover:line-through":
              tagSelected !== undefined && !tagSelected,
          })}
        >
          <h2
            className={classNames("font-serif text-xl italic", {
              "decoration-8 line-through":
                tagSelected !== undefined && !tagSelected,
            })}
          >
            {title}
          </h2>
          {excerpt && (
            <p
              className={classNames(
                "mt-1 text-xss text-neutrsal-400 font-mediums tracking-tights leading-snug max-w-2xl mb-1",
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
