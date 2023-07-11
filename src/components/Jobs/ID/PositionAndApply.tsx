import Button1 from "@/components/Button1";
import { allJobDataType } from "@/types/types";
import React from "react";

export default function PositionAndApply({
  clickedPostData,
}: {
  clickedPostData: allJobDataType | null | undefined;
}) {
  return (
    <div className="flex flex-col mt-5 sm:mt-0 sm:flex-row items-center justify-between">
      <div className="flex flex-col gap-2 mb-[50px] sm:mb-0 ">
        <div className="flex flex-row gap-3 ">
          <p className="text-secondary-dark-gray">
            {clickedPostData?.postedAt}
          </p>
          <p className="text-3xl -mt-3 text-secondary-dark-gray">.</p>
          <p className="text-secondary-dark-gray">
            {clickedPostData?.contract}
          </p>
        </div>
        <div>
          <h2 className="text-[28px] font-bold text-primary-very-dark-blue dark:text-white">
            {clickedPostData?.position}
          </h2>
        </div>
        <div>
          <p className="font-bold text-primary-violet text-sm">
            {clickedPostData?.location}
          </p>
        </div>
      </div>
      <div className="w-full sm:w-fit">
        <Button1 className="w-full sm:w-fit">
          <a href={clickedPostData?.apply} target="_blank">
            Apply Now
          </a>
        </Button1>
      </div>
    </div>
  );
}
