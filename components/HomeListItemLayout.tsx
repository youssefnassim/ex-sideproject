import classNames from "classnames";
import { type PropsWithChildren } from "react";
import { Post } from "utils/types";

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
    <li className="flex flex-col md:flex-row">
      <span className="font-mono font-medium text-lg w-36 shrink-0">
        {leftCol}
      </span>
      <div className={classNames("flex-grow", { "lg:mr-36": centered })}>
        {children}
      </div>
    </li>
  );
}
