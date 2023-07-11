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
      className="fixed bg-modal-bg top-0 left-0 h-screen w-screen z-50"
      onClick={closeModalOnParentClick}
    >
      <div
        className="horizontal-margin bg-white dark:bg-primary-very-dark-blue rounded-md mt-[35vh] overflow-hidden"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}
