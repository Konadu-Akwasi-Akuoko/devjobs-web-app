import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="horizontal-padding flex flex-row justify-between items-center h-[136px] sm:h-[160px] xl:h-[162px] bg-header-mobile sm:bg-header-tablet xl:bg-header-desktop">
      <p>devjobs</p>
      <ThemeToggle />
    </header>
  );
}
