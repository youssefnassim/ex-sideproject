import Image from "next/image";
import { useEffect, useState } from "react";
import GreenSmileyFace from "../public/green-smiley-face.svg";

export default function GreenEmojiFace({ className }: { className: string }) {
  const [mouseLeftWindow, setMouseLeftWindow] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    document.documentElement.addEventListener("mouseleave", () => {
      setMouseLeftWindow(true);
      timeout = setTimeout(() => setMouseLeftWindow(false), 1500);
    });

    document.documentElement.addEventListener("mouseenter", () => {
      setMouseLeftWindow(false);
      clearTimeout(timeout);
    });

    return () => clearTimeout(timeout);
  });

  return (
    <div className={className}>
      <GreenSmileyFace className="[&>path]:stroke-[#71FA4C] [&>path]:fill-[#71FA4C] animate-rotation" />
    </div>
  );
}

// #71FA4C
