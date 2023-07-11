import React from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Logo from "@/assets/desktop/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="horizontal-padding flex flex-row justify-between items-center h-[136px] sm:h-[160px] xl:h-[162px] bg-cover bg-no-repeat bg-center bg-header-mobile sm:bg-header-tablet xl:bg-header-desktop">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" width={115} height={32} priority />
      </Link>
      <ThemeToggle />
    </header>
  );
}
