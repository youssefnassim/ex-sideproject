import Image from "next/image";
import CopiableText from "components/CopiableText";
import FashionTimelineCard from "components/FashionTimelineCard";

export const components = {
  a: (props: any) => (
    <a
      className="text-blue-500 before:content-['→'] border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500 transition"
      target="_blank"
      rel="noopener"
      {...props}
    />
  ),
  h1: (props: any) => (
    <h1 className="text-xl font-bold mt-10 mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="relative text-lg font-bold mt-10 mb-6" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="relative text-base font-bold mt-4 mb-4" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="relative text-sm font-bold mt-4 mb-4" {...props} />
  ),
  h5: (props: any) => (
    <h5 className="relative text-xs font-bold mt-2 mb-4" {...props} />
  ),
  h6: (props: any) => (
    <h6 className="relative text-xs font-bold mt-2 mb-4" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc space-y-1 pl-8 text-xl" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal space-y-1 pl-8 text-xl" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="pl-6 text-base italic" {...props} />
  ),
  BSImage: (props: any) => (
    <div className="relative">
      <Image alt={props.alt} className="rounded-[28px]" {...props} />
    </div>
  ),
  CopiableText: ({ children }: { children: string }) => (
    <CopiableText>{children}</CopiableText>
  ),
  FashionTimelineCard,
};
