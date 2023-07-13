import Button1 from "@/components/Button1";
import { allJobDataType } from "@/types/types";
import React from "react";

export default function Footer({
  clickedPostData,
}: {
  clickedPostData: allJobDataType | null | undefined;
}) {
  return (
    <div className="horizontal-padding mt-16 rounded-t-md bg-white py-6 dark:bg-primary-very-dark-blue">
      <div className="mt-5 flex flex-col items-center justify-between sm:mt-0 sm:flex-row">
        <div className="hidden sm:mb-0 sm:flex sm:flex-col sm:gap-3">
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
