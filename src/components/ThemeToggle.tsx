"use client";
import { store } from "@/store/store";
import { changeTheme, selectTheme } from "@/store/themeSlice";
import React, { MouseEventHandler, useEffect } from "react";
import { useSelector } from "react-redux";

export default function ThemeToggle() {
  // Set theme based on local storage or os preference
  useEffect(() => {
    // Check to see the local storage for a theme preference
    // If not check to see if the user prefers dark mode or not using
    // windows.match media, dispatch an action to the store accordingly
    const theme = localStorage.getItem("theme");
    if (theme === "light" || theme === "dark") {
      store.dispatch(changeTheme(theme));
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      store.dispatch(changeTheme("light"));
    } else {
      store.dispatch(changeTheme("dark"));
    }
  }, []);
  const theme = useSelector(selectTheme);
  const onBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newTheme = theme === "light" ? "dark" : "light";
    store.dispatch(changeTheme(newTheme));
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div className="flex flex-row items-center gap-x-4">
      {/* Sun Icon SVG */}
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 15.635c.33 0 .612.295.612.639v1.89c0 .344-.282.638-.612.638s-.612-.294-.612-.638v-1.89c0-.344.282-.639.612-.639zm-4.488-1.783c.27.262.27.68 0 .941L4.03 16.231a.698.698 0 01-.97 0 .649.649 0 010-.941l1.482-1.438c.27-.261.7-.261.97 0zm9.946 0l1.483 1.438c.27.261.27.68 0 .941a.698.698 0 01-.97 0l-1.483-1.438a.649.649 0 010-.94c.242-.262.674-.262.97 0zM10 4.552c1.396 0 2.685.525 3.598 1.4.913.85 1.504 2.05 1.504 3.35 0 1.3-.59 2.5-1.504 3.35a5.314 5.314 0 01-3.598 1.4c-1.396 0-2.685-.525-3.598-1.4-.913-.85-1.504-2.05-1.504-3.35 0-1.3.564-2.5 1.504-3.35A5.314 5.314 0 0110 4.552zM2.607 8.906c.355 0 .658.274.658.594 0 .32-.303.594-.658.594H.658C.304 10.094 0 9.82 0 9.5c0-.32.304-.594.658-.594h1.95zm16.735 0c.354 0 .658.274.658.594 0 .32-.304.594-.658.594h-1.95c-.354 0-.657-.274-.657-.594 0-.32.303-.594.658-.594h1.949zM4.03 2.77l1.482 1.438c.27.261.27.68 0 .94-.242.262-.674.262-.97 0L3.059 3.71a.649.649 0 010-.941c.27-.261.701-.261.97 0zm12.91 0c.27.261.27.68 0 .941l-1.482 1.438a.698.698 0 01-.97 0 .649.649 0 010-.941l1.482-1.438c.27-.261.701-.261.97 0zM10 .198c.33 0 .612.294.612.638v1.89c0 .344-.282.639-.612.639s-.612-.295-.612-.639V.836c0-.344.282-.638.612-.638z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </svg>
      {/* Toggles */}
      <button
        className="relative w-12 rounded-full bg-white px-1 py-[5px]"
        onClick={onBtnClick}
      >
        <div
          className={
            theme === "light"
              ? "h-[14px] w-[14px] rounded-full bg-primary-violet transition-[margin] hover:bg-primary-light-violet"
              : "theme-dark h-[14px] w-[14px] rounded-full bg-primary-violet transition-[margin] hover:bg-primary-light-violet"
          }
        ></div>
      </button>
      {/* Moon Icon SVG */}
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 0c1.516 0 2.925.566 3.978 1.523A3.979 3.979 0 008 1a4.014 4.014 0 00-2.821 1.179A3.927 3.927 0 004 5c0 1.095.463 2.105 1.179 2.821A3.927 3.927 0 008 9a4.034 4.034 0 003.974-3.548c.017.18.026.364.026.548a6.02 6.02 0 01-1.768 4.232A6.02 6.02 0 016 12a5.89 5.89 0 01-4.232-1.768A6.02 6.02 0 010 6a5.89 5.89 0 011.768-4.232A6.02 6.02 0 016 0z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </svg>
    </div>
  );
}
