import { allJobDataType } from "@/types/types";
import React from "react";

export default function WhatYouWillDo({
  clickedPostData,
}: {
  clickedPostData: allJobDataType | null | undefined;
}) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold dark:text-white">What You Will Do</h2>
      <p className="mt-7 text-secondary-dark-gray">
        {clickedPostData?.role.content}
      </p>
      <ul className="mb-4 mt-8 sm:mb-0 sm:mt-6">
        {clickedPostData?.role.items.map((item, index) => {
          return (
            <li
              className="mt-2 flex flex-row items-start gap-8 text-secondary-dark-gray"
              key={index}
            >
              <span className="text-base text-primary-violet">{index + 1}</span>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
