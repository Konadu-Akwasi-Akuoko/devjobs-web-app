import React from "react";

export default function Button2({
  children,
}: {
  children: React.ReactNode | string;
}) {
  return <button className="button2">{children}</button>;
}
