"use client";
import { selectModal } from "@/store/modalSlice";
import { selectTheme } from "@/store/themeSlice";
import React from "react";
import { useSelector } from "react-redux";
import Modal from "./Modal";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useSelector(selectTheme);
  return (
    <div className={theme}>
      <div className="bg-secondary-light-gray dark:bg-primary-midnight min-h-screen relative">
        {children}
      </div>
    </div>
  );
}
