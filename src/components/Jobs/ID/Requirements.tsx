import { allJobDataType } from "@/types/types";
import React from "react";

export default function Requirements({
  clickedPostData,
}: {
  clickedPostData: allJobDataType | null | undefined;
}) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold dark:text-white">Requirements</h2>
      <p className="mt-7 text-secondary-dark-gray">
        {clickedPostData?.requirements.content}
      </p>
      <ul className="mt-8 sm:mt-6">
        {clickedPostData?.requirements.items.map((item, index) => {
          return (
            <li
              className="mt-2 flex flex-row items-start gap-8 text-secondary-dark-gray"
              key={index}
            >
              <span className="-mt-6 text-5xl text-primary-violet">.</span>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
