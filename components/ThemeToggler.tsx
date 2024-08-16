"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import classNames from "classnames";

type ThemeTogglerProps = {
  className?: string;
};

export default function ThemeToggler({ className }: ThemeTogglerProps) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div
      className={classNames("hover:cursor-pointer", className)}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <div
        className={classNames(
          "flex items-center justify-center h-[18px] w-[18px] border border-dashed border-neutral-600 rounded-full",
          { "border-none": resolvedTheme === "dark" }
        )}
      >
        <div
          className={classNames(
            "h-[14px] w-[14px] rounded-full border border-neutral-600",
            {
              "border-none bg-neutral-400": resolvedTheme === "dark",
            }
          )}
        />
      </div>
    </div>
  );
}
