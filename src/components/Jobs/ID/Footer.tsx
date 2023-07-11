import Button1 from "@/components/Button1";
import { allJobDataType } from "@/types/types";
import React from "react";

export default function Footer({
  clickedPostData,
}: {
  clickedPostData: allJobDataType | null | undefined;
}) {
  return (
    <div className="horizontal-padding rounded-t-md mt-16 py-6 bg-white dark:bg-primary-very-dark-blue">
      <div className="flex flex-col mt-5 sm:mt-0 sm:flex-row items-center justify-between">
        <div className="sm:flex sm:flex-col sm:gap-3 sm:mb-0 hidden">
          <div>
            <h2 className="text-[28px] font-bold text-primary-very-dark-blue dark:text-white">
              {clickedPostData?.position}
            </h2>
          </div>
          <div>
            <p className="text-secondary-dark-gray">
              {clickedPostData?.company} Digital Inc.
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
    </div>
  );
}
