import React from "react";
import Image from "next/image";

export default function FormInput({ icon, width, placeholder }: any) {
  return (
    <div
      className={
        "px-8 bg-white dark:bg-primary-very-dark-blue flex flex-row items-center gap-x-4 rounded-[6px] " +
        width
      }
    >
      <Image
        src={icon}
        alt="icon"
        height={24}
        width={24}
        priority
        className="inline"
      />
      <input
        type="text"
        placeholder={placeholder}
        className="py-7 text-base placeholder:text-secondary-gray dark:text-white dark:bg-primary-very-dark-blue appearance-none focus-visible:outline-none flex-1"
      />
    </div>
  );
}
