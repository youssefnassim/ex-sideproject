import Image from "next/image";
import { useEffect, useState } from "react";
import greenSmileyFace from "../public/green-smiley-face.svg";
import tearSmiley from "../public/tear-smiley.png";

export default function GreenEmojiFace() {
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
    <div className="w-[150px] h-[150px] absolute right-[17%] -top-2 animate-rotation hover:cursor-pointer">
      <Image
        src={mouseLeftWindow ? tearSmiley : greenSmileyFace}
        alt={mouseLeftWindow ? "Smiley with tear" : "The green emoji face"}
      />
    </div>
  );
}
