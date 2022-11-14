import Link from "next/link";
import { useRouter } from "next/router";

export default function PageSwitcher() {
  const router = useRouter();

  return (
    <div className="flex fixed bottom-4 right-4 bg-neutral-500 rounded-full rounded-full shadow-xl">
      <Link href="/">
        <a
          className={`px-2 py-1 text-xs text-white font-medium uppercase rounded-full ${
            router.pathname === "/" &&
            "bg-white text-gray-800 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.2)]"
          }`}
        >
          Posts
        </a>
      </Link>
      <Link href="/links">
        <a
          className={`px-2 py-1 text-xs text-white font-medium uppercase rounded-full ${
            router.pathname === "/links" &&
            "bg-white text-gray-800 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.2)]"
          }`}
        >
          Links
        </a>
      </Link>
    </div>
  );
}
