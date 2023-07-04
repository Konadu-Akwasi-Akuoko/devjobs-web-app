import React from "react";

export default function Button1({
  children,
}: {
  children: React.ReactNode | string;
}) {
  return <button className="button1">{children}</button>;
}
