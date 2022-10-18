import Link from "next/link";
import { PostMeta } from "../utils/types";

export default function PostCard({
  title,
  slug,
  ...rest
}: PostMeta & { slug: string }) {
  return (
    <h2 className="uppercase hp-uppercase-text font-medium mb-3">
      <Link href={slug}>
        <a className="tesxt-[#94F668] after:contsent-['↩'] undserline border-b-4 border-transparent border-dasshed border-transparent hosver:border-black transition">
          {title}
        </a>
      </Link>
    </h2>
  );
}
