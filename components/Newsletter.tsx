import { HomeListItemLayout } from "./HomeListItemLayout";

type NewsletterProps = {};

export function Newsletter({}: NewsletterProps) {
  return (
    <HomeListItemLayout leftCol="NEWSLTTR" centered>
      <div className="text-2xl md:text-3xl flex items-center">
        <div className="hidden md:block flex-grow  h-0 border-b-[3px] border-dotted border-gray-800" />
        <div className="hidden md:block font-sans h-5 w-[10.5px] relative overflow-x-hidden text-4xl">
          <span className="absolute leading-[0] right-0 top-[6.7px]">→</span>
        </div>
        <div className="md:w-2/3 md:pl-2">
          <span className="font-bold">Subscribe</span> to my{" "}
          <span className="font-display">Newsletter</span>
        </div>
      </div>
    </HomeListItemLayout>
  );
}
