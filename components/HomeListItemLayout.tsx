import classNames from "classnames";
import { type PropsWithChildren } from "react";

type HomeListItemLayoutProps = PropsWithChildren<{
  leftCol: string;
  centered?: boolean;
}>;

export function HomeListItemLayout({
  leftCol,
  centered = false,
  children,
}: HomeListItemLayoutProps) {
  return (
    <li className="flex flex-col md:flex-row first:border-none border-t-[0px] border-neutral-200 border-dosted">
      <div className="font-mono font-mediums text-sm text-neutral-400 w-32 shrink-0">
        {leftCol}
      </div>
      <div
        className={classNames("flex-grow", {
          "lg:mr-36": centered,
        })}
      >
        {children}
      </div>
    </li>
  );
}
