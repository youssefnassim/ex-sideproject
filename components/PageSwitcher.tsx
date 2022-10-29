import Link from "next/link";
import { useRouter } from "next/router";

export default function PageSwitcher() {
  const router = useRouter();

  return (
    <div className="fixed bottom-5 right-5 bg-zinc-800 rounded-full px-0.5 pb-[2px] leading-5 z-50">
      <Link href="/">
        <a
          className={`px-2 py-1 text-[10px] text-white font-medium uppercase rounded-full ${
            router.pathname === "/" && "bg-white text-gray-800"
          }`}
        >
          Posts
        </a>
      </Link>
      <Link href="/links">
        <a
          className={`px-2 py-1 text-[10px] text-white font-medium uppercase rounded-full ${
            router.pathname === "/links" && "bg-white text-gray-800"
          }`}
        >
          Links
        </a>
      </Link>
    </div>
  );
}
