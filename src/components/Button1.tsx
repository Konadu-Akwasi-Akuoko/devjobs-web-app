import React from "react";
import { twMerge } from "tailwind-merge";

export default function Button1({
  children,
  className,
}: {
  children: React.ReactNode | string;
  className?: string;
}) {
  return (
    <button className={twMerge("button1", className)} data-testid="button1">
      {children}
    </button>
  );
}
