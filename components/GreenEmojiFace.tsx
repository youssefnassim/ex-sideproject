import Image from "next/image";
import { useEffect, useState } from "react";
import greenSmileyFace from "../public/green-smiley-face.svg";

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
    <div className="w-[150px] h-auto absolute right-[15%] -top-2 animate-rotation hover:cursor-pointer">
      {mouseLeftWindow ? (
        <div className="text-[165px] leading-[0.9]">😭</div>
      ) : (
        <>
          <Image src={greenSmileyFace} alt="The green emoji face" />
        </>
      )}
    </div>
  );
}
