"use client";
import { changeStateOfModal } from "@/store/modalSlice";
import { store } from "@/store/store";
import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const closeModalOnParentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      store.dispatch(changeStateOfModal(false));
    }
  };

  return (
    <div
      className="fixed left-0 top-0 z-50 h-screen w-screen bg-modal-bg"
      onClick={closeModalOnParentClick}
    >
      <div
        className="horizontal-margin mt-[35vh] overflow-hidden rounded-md bg-white dark:bg-primary-very-dark-blue"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}
