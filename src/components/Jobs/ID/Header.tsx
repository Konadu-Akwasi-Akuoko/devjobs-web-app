"use client";
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
    <div className="-mt-4 flex flex-col items-center rounded-md bg-white  dark:bg-primary-very-dark-blue  sm:-mt-10 sm:flex-row ">
      <div
        className="-mt-4 flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-md sm:mt-0 sm:rounded-none xl:h-[140px] xl:w-[140px]"
        style={{ backgroundColor: clickedPostData?.logoBackground }}
      >
        {clickedPostData === undefined || null ? (
          ""
        ) : (
          <img
            src={`../.${clickedPostData?.logo}`}
            alt="logo"
            className="h-auto w-3/4"
          />
        )}
      </div>
      <div className="mt-6 flex flex-col items-center justify-between sm:ml-10 sm:mt-0 sm:grow sm:flex-row">
        <div>
          <h1 className=" mb-3 text-center text-2xl font-bold text-primary-very-dark-blue dark:text-white sm:mb-6">
            {clickedPostData?.company}
          </h1>
          <p className="text-center text-secondary-dark-gray">
            {clickedPostData?.company.toLocaleLowerCase()}.com
          </p>
        </div>
        <div className="mb-8 mt-6 sm:mb-0 sm:mr-10 sm:mt-0">
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
