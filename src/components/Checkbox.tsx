import React from "react";

export default function CheckBox({ name, value, label }: any) {
  return (
    <div className="flex items-center gap-4">
      <input
        className="h-6 w-6 appearance-none bg-secondary-light-gray hover:bg-primary-light-violet hover:checked:bg-primary-violet checked:bg-primary-violet rounded checked:content-['✓']"
        type="checkbox"
        name={name}
        value={value}
      />
      <label className="font-bold text-base" htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
