import React from "react";
import Image from "next/image";
import FormInputType from "@/types/types";
import { twMerge } from "tailwind-merge";

export default function FormInput({
  name,
  icon,
  className,
  placeholder,
  value,
  onChange,
}: FormInputType) {
  return (
    <div
      data-testid="form-input"
      className={twMerge(
        "flex flex-row items-center gap-x-4 rounded-[6px] bg-white px-8 dark:bg-primary-very-dark-blue ",
        className
      )}
    >
      {icon ? (
        <Image
          src={icon}
          alt="icon"
          height={24}
          width={24}
          priority
          className="inline"
        />
      ) : null}

      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
        className="flex-1 appearance-none py-7 text-base placeholder:text-secondary-gray focus-visible:outline-none dark:bg-primary-very-dark-blue dark:text-white"
      />
    </div>
  );
}
