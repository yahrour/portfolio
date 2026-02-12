"use client";

import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";

export function CopyToClipboard({ content }: { content: string }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    } catch {}
  };

  return (
    <>
      {isClicked ? (
        <CopyCheck
          size={15}
          className="inline-block cursor-pointer"
          aria-label="Copy to clipboard"
          role="button"
        />
      ) : (
        <Copy
          size={15}
          className="inline-block cursor-pointer"
          onClick={handleCopyToClipboard}
          aria-label="Copy to clipboard"
          role="button"
        />
      )}
    </>
  );
}
