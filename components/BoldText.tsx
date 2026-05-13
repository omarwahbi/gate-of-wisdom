import React from "react";

export function processMarkdownBold(text: string): (string | React.JSX.Element)[] {
  const parts: (string | React.JSX.Element)[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const match = remaining.match(/\*\*(.+?)\*\*/);
    if (!match) {
      parts.push(remaining);
      break;
    }

    const index = match.index!;
    if (index > 0) {
      parts.push(remaining.substring(0, index));
    }

    const boldText = match[1];
    parts.push(
      <strong key={key++} className="font-bold">
        {boldText}
      </strong>
    );

    remaining = remaining.substring(index + match[0].length);
  }

  return parts;
}

interface BoldTextProps {
  text: string;
  className?: string;
}

export function BoldText({ text, className }: BoldTextProps) {
  const parts = processMarkdownBold(text);
  return <span className={className}>{parts}</span>;
}
