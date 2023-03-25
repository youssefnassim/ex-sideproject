import Link from "next/link";
import { PostMeta } from "../utils/types";
import { format } from "date-fns";

export default function PostCard({
  title,
  slug,
  ...rest
}: PostMeta & { slug: string }) {
  const publishedAt = new Date(rest.publishedAt);
  return (
    <h2 className="uppercase text-xl md:text-2xl font-medium mb-4 md:mb-4">
      <Link legacyBehavior href={slug}>
        <a className="transition border-b-4 border-transparent hover:border-b-4 hover:border-black dark:hover:border-neutral-500">
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
