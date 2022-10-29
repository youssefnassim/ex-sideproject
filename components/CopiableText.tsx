import React, { useState } from "react";

export default function CopiableText({ children }: { children: string }) {
  const [hasJustBeenCopied, setHasJustBeenCopied] = useState(false);

  const copyTextToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(children);
    } else {
      return Promise.reject(new Error("navigator support problem"));
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      await copyTextToClipboard(children);
      setHasJustBeenCopied(true);
      setTimeout(() => setHasJustBeenCopied(false), 3000);
    } catch (error) {}
  };

  const afterContent = hasJustBeenCopied
    ? "after:content-['[copied]']"
    : "after:content-['[copy]']";

  return (
    <span
      className={`hover:cursor-pointer ${afterContent} after:ml-3`}
      onClick={handleCopyToClipboard}
    >
      {children}
    </span>
  );
}
