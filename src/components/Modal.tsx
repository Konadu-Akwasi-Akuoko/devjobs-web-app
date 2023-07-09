import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bg-modal-bg top-0 left-0 h-screen w-screen">
      <div className="horizontal-margin bg-white rounded-md mt-[35vh] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
