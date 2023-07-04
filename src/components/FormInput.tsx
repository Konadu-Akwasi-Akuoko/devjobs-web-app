import React from "react";

export default function FormInput({ icon, placeholder }: any) {
  return (
    <div>
      {icon}
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
