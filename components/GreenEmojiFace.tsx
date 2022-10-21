import Image from "next/image";
import { useEffect, useState } from "react";
import GreenSmileyFace from "../public/green-smiley-face.png";
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
    <div className="w-[150px] h-[150px] fixed right-[28%] top-[10%] animate-rotation hover:cursor-pointer">
      <Image src={GreenSmileyFace} alt="The green emoji face" />
    </div>
  );
}
