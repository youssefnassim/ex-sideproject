import Image from "next/image";
import PostCard from "./PostCard";

export const components = {
  p: (props: any) => <p className="mb-5 text-sm" {...props} />,
  a: (props: any) => (
    <a
      className="text-blue-500 after:content-['↩'] border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 transition"
      {...props}
    />
  ),
  h1: (props: any) => (
    <h1
      className="uppercase text-xl font-medium mt-10 mb-4 text-center"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2 className="uppercase text-lg font-medium mt-10 mb-4" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="uppercase text-sm font-medium mt-10 mb-4" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="uppercase text-xs font-medium mt-10 mb-4" {...props} />
  ),
  h5: (props: any) => (
    <h5 className="text-xs font-medium mt-10 mb-4" {...props} />
  ),
  h6: (props: any) => (
    <h6 className="text-xs font-medium mt-10 mb-4" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc text-sm space-y-1 pl-8 mb-4" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal text-sm space-y-1 pl-8 mb-4" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="pl-6 text-xl italic" {...props} />
  ),
  BSImage: (props: any) => (
    <div className="relative">
      <Image alt={props.alt} className="rounded-[28px]" {...props} />
    </div>
  ),
};
