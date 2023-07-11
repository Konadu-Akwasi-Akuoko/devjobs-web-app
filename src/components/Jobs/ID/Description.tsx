import { allJobDataType } from "@/types/types";
import React from "react";

export default function Description({
  clickedPostData,
}: {
  clickedPostData: allJobDataType | null | undefined;
}) {
  return (
    <div className="mt-10">
      <p className="text-secondary-dark-gray">{clickedPostData?.description}</p>
    </div>
  );
}
