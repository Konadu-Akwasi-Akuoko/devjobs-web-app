import React from "react";
import { twMerge } from "tailwind-merge";

export default function Button1({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode | string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <button
      className={twMerge("button1", className)}
      data-testid="button1"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
