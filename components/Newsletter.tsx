import { HomeListItemLayout } from "./HomeListItemLayout";

type NewsletterProps = {};

export function Newsletter({}: NewsletterProps) {
  return (
    <HomeListItemLayout leftCol="NEWSLTTR" centered>
      <div className="text-xl flex items-center">
        <div className="hidden md:block flex-grow h-0 border-b-[1.5px] border-dashed border-neutral-800" />
        <div className="hidden md:block font-mono h-5 w-[10.5px] relative overflow-x-hidden text-2xl">
          <span className="absolute leading-[0] right-0 top-[9.5px]">→</span>
        </div>
        <div className="md:w-2/3 md:pl-2">
          <span className="font-mono uppercase tracking-tight">Subscribe</span>{" "}
          {/* to my <span className="">Newsletter</span> */}
        </div>
      </div>
    </HomeListItemLayout>
  );
}
