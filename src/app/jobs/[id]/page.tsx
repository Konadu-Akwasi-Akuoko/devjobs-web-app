import React from "react";

export default function ID({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}
