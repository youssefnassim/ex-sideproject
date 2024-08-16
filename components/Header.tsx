"use client";

import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import ThemeToggler from "./ThemeToggler";

type MenuContext = "PAGES" | "SOCIAL" | "N/A";

const menu: Partial<Record<MenuContext, React.ReactNode>> = {
  PAGES: (
    <ul className="font-mono uppercase text-neutral-400 text-sm space-y-1">
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
    </ul>
  ),
  SOCIAL: (
    <ul className="font-mono uppercase text-neutral-400 text-sm space-y-1">
      <li>Mail</li>
      <li>Twitter</li>
      <li>Github</li>
    </ul>
  ),
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [context, setContext] = useState<MenuContext>("N/A");

  const toggleMenu = (newContext: MenuContext) => {
    setMenuOpen(false);
    setTimeout(
      () => {
        if (context !== newContext) {
          setMenuOpen(true);
        }
        setContext(context === newContext ? "N/A" : newContext);
      },
      context === "N/A" ? 0 : 300
    );
  };

  return (
    <header className="mb-10 md:mb-14 h-28 md:h-32">
      <ul className={classNames("flex justify-between text-xl")}>
        <li>
          <Link href="/" className={classNames("text-xl font-bold")}>
            Ex Side Project
          </Link>
        </li>
        <li className="flex items-center gap-4 -mt-1">
          <div
            title="Pages"
            className="p-2 flex hover:cursor-pointer"
            onClick={() => toggleMenu("PAGES")}
          >
            <div
              className={classNames(
                "h-[14px] w-[14px] border-[1.5px] border-neutral-600 rounded-full -mr-[7px]",
                { "bg-neutral-200": context === "PAGES" }
              )}
            />
            <div
              className={classNames(
                "h-[14px] w-[14px] border-[1.5px] border-neutral-600 rounded-full",
                { "bg-neutral-600": context === "PAGES" }
              )}
            />
          </div>
          <div
            title="Social"
            className="p-2 hover:cursor-pointer"
            onClick={() => toggleMenu("SOCIAL")}
          >
            <svg
              className={classNames(
                "block pointer-events-none stroke-neutral-600",
                {
                  "fill-neutral-400": context === "SOCIAL",
                  "fill-none": context !== "SOCIAL",
                }
              )}
              height={15}
              width={15}
              viewBox="0 0 30 26"
            >
              <path
                stroke-width="2.5px"
                d="M1.14359 25L15 0.999999L28.8564 25H1.14359Z"
              ></path>
            </svg>
          </div>
          <ThemeToggler className="py-2 pl-2" />
        </li>
      </ul>
      <div
        className={classNames(
          "mt-2 text-right overflow-hidden transition-all duration-300",
          {
            "h-0": !menuOpen,
            "h-full": menuOpen,
          }
        )}
      >
        {menu[context]}
      </div>
    </header>
  );
}
