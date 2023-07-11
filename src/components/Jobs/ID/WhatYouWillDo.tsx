import { allJobDataType } from "@/types/types";
import React from "react";

export default function WhatYouWillDo({
  clickedPostData,
}: {
  clickedPostData: allJobDataType | null | undefined;
}) {
  return (
    <div className="mt-10">
      <h2 className="dark:text-white font-bold text-xl">What You Will Do</h2>
      <p className="mt-7 text-secondary-dark-gray">
        {clickedPostData?.role.content}
      </p>
      <ul className="mt-8 sm:mt-6 mb-4 sm:mb-0">
        {clickedPostData?.role.items.map((item, index) => {
          return (
            <li
              className="text-secondary-dark-gray flex flex-row items-start gap-8 mt-2"
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
