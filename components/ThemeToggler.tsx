"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Moon from "../public/moon.svg";
import Sun from "../public/sun.svg";

export default function Themetoggler() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div
      className="fixed top-4 right-4 cursor-pointer"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {mounted &&
        (resolvedTheme === "dark" ? (
          <Moon className="w-6 stroke-2 stroke-white" />
        ) : (
          <Sun className="w-6 stroke-2" />
        ))}
    </div>
  );
}
