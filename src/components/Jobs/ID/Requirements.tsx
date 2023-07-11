import { allJobDataType } from "@/types/types";
import React from "react";

export default function Requirements({
  clickedPostData,
}: {
  clickedPostData: allJobDataType | null | undefined;
}) {
  return (
    <div className="mt-10">
      <h2 className="dark:text-white font-bold text-xl">Requirements</h2>
      <p className="mt-7 text-secondary-dark-gray">
        {clickedPostData?.requirements.content}
      </p>
      <ul className="mt-8 sm:mt-6">
        {clickedPostData?.requirements.items.map((item, index) => {
          return (
            <li
              className="text-secondary-dark-gray flex flex-row items-start gap-8 mt-2"
              key={index}
            >
              <span className="text-5xl -mt-6 text-primary-violet">.</span>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
