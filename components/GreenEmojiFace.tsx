import Image from "next/image";
import greenSmileyFace from "../public/green-smiley-face.svg";

export default function GreenEmojiFace() {
  return (
    <div className="w-[150px] h-auto absolute right-[15%] -top-2 animate-rotation">
      <Image src={greenSmileyFace} alt="The green emoji face" />
    </div>
  );
}
