import React from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Logo from "@/assets/desktop/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="horizontal-padding flex h-[136px] flex-row items-center justify-between bg-header-mobile bg-cover bg-center bg-no-repeat sm:h-[160px] sm:bg-header-tablet xl:h-[162px] xl:bg-header-desktop">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" width={115} height={32} priority />
      </Link>
      <ThemeToggle />
    </header>
  );
}
