import { useTheme } from "next-themes";
import Moon from "../public/moon.svg";
import Sun from "../public/sun.svg";

export default function Themetoggler() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div
      className="fixed top-4 right-4 cursor-pointer bg-white dark:bg-black"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <Moon className="w-6 stroke-2" />
      ) : (
        <Sun className="w-6 stroke-2" />
      )}
    </div>
  );
}
