import Link from "next/link";
import { PostMeta } from "../utils/types";
import { format } from "date-fns";

export default function PostCard({
  title,
  slug,
  tagSelected = false,
  ...rest
}: PostMeta & { slug: string; tagSelected: boolean }) {
  const publishedAt = new Date(rest.publishedAt);
  return (
    <h2 className="uppercase text-xl md:text-2xl font-bold mb-4 md:mb-3">
      <Link legacyBehavior href={slug}>
        <a
          className={`transition border-b-4 border-transparent hover:border-b-4 hover:border-neutral-800/80 dark:hover:border-neutral-500 ${
            tagSelected ? "shadow-[inset_0_-17px_0_#71FA4C]" : ""
          }`}
        >
          {/* <time
            dateTime={format(publishedAt, "y-MM-dd")}
            className="text-lg fosnt-['marydale'] font-sblack"
          >
            {format(publishedAt, "d/LL/Y")}
          </time> */}
          {/* <br /> */}
          <span className="">{title}</span>
        </a>
      </Link>
    </h2>
  );
}
