import React from "react";

export default function CheckBox({
  onClick,
  value,
  label,
}: {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  value: boolean;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={
          value
            ? `h-6 w-6 bg-primary-violet hover:bg-primary-violet rounded text-center text-xl cursor-pointer text-white`
            : `h-6 w-6 bg-secondary-light-gray hover:bg-primary-light-violet rounded text-center text-xl cursor-pointer text-white`
        }
        onClick={onClick}
      >
        {value ? "\u2713" : ""}
      </div>
      <p className="font-bold text-base dark:text-secondary-white">{label}</p>
    </div>
  );
}
