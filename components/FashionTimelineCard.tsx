import Image from "next/image";
import { useState } from "react";
import Thumbnail from "../public/assets/images/fashion-history-of-web-design/thumbnail.jpg";
import MinimalistThumbnail from "../public/assets/images/fashion-history-of-web-design/minimalist-thumbnail.png";

const cards = [
  {
    caption:
      "I doubt there was this “standard” notion of cards as a way to layout content at this period, but there you go, If it ever was, this is how it could’ve looked. This is what I referred to as the 2000s system font times.",
    styles: {
      container: "border h-[385px] [&:not(dark)]:shadow-lg shadow-neutral-200",
      image: "border h-[220px] p-1 m-3 flex mb-4",
      title: "font-[georgia] text-lg mb-2 px-3",
      description: "font-[verdana] mb-2 text-[13px] px-3",
      button:
        "py-0.5 px-2 ml-3 text-[13px] font-[verdana] bg-[#bbb] border-[3px] border-t-[#f2f2f2] border-l-[#f2f2f2] border-b-[#b2b2b2] border-r-[#b2b2b2] active:border-b-[#f2f2f2] active:border-r-[#f2f2f2] active:border-t-[#b2b2b2] active:border-l-[#b2b2b2]",
    },
  },
  {
    caption:
      "Typeface wise, nothing much changed here. This doesn’t necessarily map to one of the highlights above, but it was the days where CSS 3 bells and whistles saw widespread adoption. Notably text and box shadows, border radius etc..and boy they were abused, everything had shadows and round corners.",
    styles: {
      container:
        "border h-[385px] rounded-md [&:not(dark)]:shadow-lg shadow-neutral-200",
      image: "h-[220px] m-2.5 flex mb-3",
      title: "font-[arial] font-bold text-xl mb-2 px-4",
      description: "font-[arial] mb-2 px-4",
      button:
        "second-btn py-1 px-3 rounded font-[arial] ml-4 text-white bg-gradient-to-b from-[#0088cc] to-[#0044cc] hover:bg-[#0044cc]",
    },
  },
  {
    caption:
      "This one maps to the Google font beginning with the flattening of web and UI in general. Pioneered by the Apple’s move from skeuomorphism to flat design (and thin typeface at the start).",
    styles: {
      container:
        "border h-[385px] rounded-md [&:not(dark)]:shadow-lg shadow-neutral-200",
      image: "h-[220px] m-2 flex mb-3 rounded [&_img]:rounded",
      title: "font-['Open_Sans'] font-normal text-lg mb-2 px-4",
      description: "font-['Open_Sans'] text-gray-500 mb-3 px-4",
      button:
        "py-1 px-3 rounded font-['Open_Sans'] ml-4 bg-blue-500 text-white",
    },
  },
  {
    caption:
      "This placement is a bit awkward, nothing special. I hesitated whether I should keep it or not, but I did so just to dedicate a place for a serif font.",
    styles: {
      container:
        "shadow h-[385px] rounded [&:not(dark)]:shadow-lg shadow-neutral-200",
      image: "h-[220px] m-3 flex mb-3 rounded-xl [&_img]:rounded shadow",
      title: "font-[bitter] font-bold text-xl mb-2 px-4",
      description: "font-['Open_Sans'] text-gray-700 mb-3 px-4",
      button:
        "py-1 px-3 rounded-full font-['Open_Sans'] ml-4 border border-blue-500 text-blue-500",
    },
  },
  {
    caption:
      'Clearly this is the new system font era. Cleanliness could be the title of this period. Almost like this: <code>system-ui, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif</code> became the standard way to style fonts on the web.',
    styles: {
      container:
        "border h-[385px] rounded-[12px] [&:not(dark)]:shadow-lg shadow-neutral-200",
      image:
        "m-3 h-[210px] flex mb-3 [&_img]:rounded-[11px] [&_img]:rousnded-b-none",
      title: "font-[System-ui] font-bold text-xl mb-2 px-5",
      description: "font-[System-ui] mb-3 px-5",
      button:
        "py-2 px-5 rounded-lg font-[System-ui] font-bold ml-4 bg-blue-600 text-white shadow-lg shadow-neutral-200 shadow-blue-100",
    },
  },
  {
    caption:
      "The trend of clean and minimalist UI is reaching places these days few people saw coming. It’s for the best I’d like to say. I’m a fan and early adopter as well :)",
    styles: {
      container:
        "border h-[385px] rounded-[8px] text-center [&:not(dark)]:shadow-lg shadow-neutral-200 flex flex-col p-4 hover:bg-neutral-50 cursor-pointer duration-500",
      image: "m-2 w-[100px] flex mb-3 [&_img]:rounded-[7px] self-center pt-7",
      title:
        "font-[Inter] font-bold text-[25px] tracking-tight mb-3 px-5 text-center bg-clip-text bg-gradient-to-b from-[#999] to-black text-fill-color-transparent",
      description:
        "font-['Space_Grotesk'] mb-6 px-5 text-base text-zinc-600 text-center",
      button:
        "py-2 px-5 rounded-full font-['Space_Grotesk'] font-normal bg-zinc-700 text-white w-fit self-center",
    },
  },
];

const CARDS_PAGER_SELECTED_CARDS =
  "border-0 !text-xl before:content-[''] before:block before:-z-[1] before:bg-white before:w-[45px] before:h-[45px] before:border before:absolute before:-top-[5px] before:rounded-full before:-left-[5px]";

export default function FashionTimelineCard() {
  const [upfrontCard, setUpfrontCard] = useState(0);

  return (
    <>
      <div className="py-5 dark:text-neutral-900 dark:font-normal">
        <div className="flex justify-center">
          <div className="h-[400px] w-[350px] relative">
            {cards.map((cardClass, i) => (
              <div
                key={i}
                className={`w-full absolute mx-auto mb-5 bg-white transition-all duration-1000 ${
                  i === upfrontCard ? "opacity-100" : "opacity-0 -z-[1]"
                } ${cardClass.styles.container}`}
              >
                <div className={cardClass.styles.image}>
                  <Image
                    src={i === 5 ? MinimalistThumbnail : Thumbnail}
                    alt="Thumbnail"
                    className="object-cover"
                  />
                </div>
                <h2 className={cardClass.styles.title}>
                  Card Fashion Timeline
                </h2>
                <p className={cardClass.styles.description}>
                  Cards are a good form of giving an excerpt of some larger
                  piece of content I guess
                </p>
                <button className={cardClass.styles.button}>
                  Read more{" "}
                  {i === 5 && <span className="font-sans">&rarr;</span>}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[60px] mt-3 relative border-td border-dashed border-neutral-900">
          <div className="absolute flex gap-2 left-1/2 -translate-x-1/2">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <button
                key={index}
                onClick={() => setUpfrontCard(index)}
                className={`mr-2 -mt-[0px] bg-white border text-base font-bold inline-block w-[35px] h-[35px] rounded-full relative ${
                  upfrontCard === index ? CARDS_PAGER_SELECTED_CARDS : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
