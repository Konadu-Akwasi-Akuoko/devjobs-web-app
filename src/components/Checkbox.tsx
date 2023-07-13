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
        data-testid="checkbox"
        className={
          value
            ? `h-6 w-6 cursor-pointer rounded bg-primary-violet text-center text-xl text-white hover:bg-primary-violet`
            : `h-6 w-6 cursor-pointer rounded bg-secondary-light-gray text-center text-xl text-white hover:bg-primary-light-violet`
        }
        onClick={onClick}
      >
        {value ? "\u2713" : ""}
      </div>
      <p className="text-base font-bold dark:text-secondary-white">{label}</p>
    </div>
  );
}
