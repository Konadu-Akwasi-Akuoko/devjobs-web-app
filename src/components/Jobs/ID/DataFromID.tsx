/* eslint-disable @next/next/no-img-element */
"use client";
import Button1 from "@/components/Button1";
import Button2 from "@/components/Button2";
import {
  loadClickedPost,
  loadInitialPosts,
  selectData,
} from "@/store/jobsDataSlice";
import { selectClickedData } from "@/store/searchSlice";
import { store } from "@/store/store";
import { allJobDataType } from "@/types/types";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "./Header";

export default function DataFromID({
  id,
  data,
}: {
  id: number;
  data: allJobDataType[];
}) {
  const clickedPostData = useSelector(selectClickedData);
  const allData = useSelector(selectData);
  useState(async () => {
    if (allData.length === 0) {
      await store.dispatch(loadInitialPosts(data));
    }
    await store.dispatch(loadClickedPost(Number(id)));
  });
  return (
    <>
      <section className="horizontal-padding">
        {/* Header */}
        <Header clickedPostData={clickedPostData} />

        {/* Main Content */}
        <div className="p-6 sm:p-12 bg-white dark:bg-primary-very-dark-blue mt-8 rounded-md">
          {/* Position and apply button */}
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

          {/* Description */}
          <div className="mt-10">
            <p className="text-secondary-dark-gray">
              {clickedPostData?.description}
            </p>
          </div>

          {/* Requirements  */}
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
                    <span className="text-5xl -mt-6 text-primary-violet">
                      .
                    </span>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* What you will do */}
          <div className="mt-10">
            <h2 className="dark:text-white font-bold text-xl">
              What You Will Do
            </h2>
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
                    <span className="text-base text-primary-violet">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer for ClickedData only! */}
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
    </>
  );
}
