/* eslint-disable @next/next/no-img-element */
import Button2 from "@/components/Button2";
import { allJobDataType } from "@/types/types";
import react from "react";

export function Header({
  clickedPostData,
}: {
  clickedPostData: allJobDataType | null | undefined;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center rounded-md -mt-4  sm:-mt-10  bg-white dark:bg-primary-very-dark-blue ">
      <div
        className="h-[50px] w-[50px] xl:w-[140px] xl:h-[140px] -mt-4 sm:mt-0 rounded-md sm:rounded-none overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: clickedPostData?.logoBackground }}
      >
        <img
          src={`.${clickedPostData?.logo}`}
          alt="logo"
          className="w-3/4 h-auto"
        />
      </div>
      <div className="mt-6 sm:mt-0 sm:ml-10 flex flex-col sm:flex-row sm:grow justify-between items-center">
        <div>
          <h1 className=" text-2xl text-primary-very-dark-blue dark:text-white font-bold mb-3 sm:mb-6 text-center">
            {clickedPostData?.company}
          </h1>
          <p className="text-secondary-dark-gray text-center">
            {clickedPostData?.company.toLocaleLowerCase()}.com
          </p>
        </div>
        <div className="sm:mr-10 mt-6 sm:mt-0 mb-8 sm:mb-0">
          <Button2>
            <a href={clickedPostData?.website} target="_blank">
              Company Site
            </a>
          </Button2>
        </div>
      </div>
    </div>
  );
}
