import { type Options } from "rehype-pretty-code";
import { visit } from "unist-util-visit";

const WRAPPER_DIV = "rounded-lg bg-gray-100 my-5";
const TITLE = "rounded-lg px-5 py-2 font-mono text-neutral-500";
const PRE = "py-4 overflow-x-auto leading-7 text-base";
const CODE =
  "grid [&>span]:border-l-4 [&>span]:border-l-transparent [&>span]:pl-3 [&>span]:pr-5";
// const LINE = "px-5";
const NUMBERED_LINE =
  "[counter-reset:line] before:[&>span]:mr-5 before:[&>span]:inline-block before:[&>span]:w-4 before:[&>span]:text-right before:[&>span]:text-gray-300 before:[&>span]:![content:counter(line)] before:[&>span]:[counter-increment:line]";
const HIGHLIGHTED_LINE = "!border-gray-400 bg-gray-200 before:!text-gray-500";

export function rehypePrettyCodeStyles() {
  return (tree: any) => {
    visit(
      tree,
      (node: any) =>
        typeof node.properties?.["data-rehype-pretty-code-fragment"] !==
        "undefined",
      (node: any) => {
        if (node.tagName === "div") {
          node.properties.className = [
            ...(node.properties.className || []),
            WRAPPER_DIV,
          ];

          node.children = node.children.map((node: any) => {
            if (
              node.tagName === "div" &&
              typeof node.properties?.["data-rehype-pretty-code-title"] !==
                "undefined"
            ) {
              node.properties.className = [
                ...(node.properties.className || []),
                TITLE,
              ];
            }
            if (node.tagName === "pre") {
              node.properties.className = [PRE];
              if (node.children[0].tagName === "code") {
                node.children[0].properties.className = [
                  ...(node.children[0].properties.className || []),
                  CODE,
                ];
                if (
                  typeof node.children[0].properties["data-line-numbers"] !==
                  "undefined"
                ) {
                  node.children[0].properties.className.push(NUMBERED_LINE);
                }
              }
            }

            return node;
          });

          return node;
        }
      }
    );
  };
}

export const options: Partial<Options> = {
  // Use one of Shiki's packaged themes
  theme: "github-light",
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
    node.properties.className = [""];
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node) {
    node.properties.className.push(HIGHLIGHTED_LINE);
  },
  onVisitHighlightedWord(node) {
    // node.properties.className = ["word"];
  },
};
