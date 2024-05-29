"use client";

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

  return (
    <span
      className="flex gap-2 flex-wrap justify-center cursor-pointer"
      onClick={handleCopyToClipboard}
    >
      <span>{children}</span>
      <span>{hasJustBeenCopied ? "[copied]" : "[copy]"}</span>
    </span>
  );
}
