/* eslint-disable @next/next/no-img-element */
"use client";
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
    <section className="horizontal-padding">
      {/* Header */}
      <div className="flex flex-row rounded-md overflow-hidden -mt-10  bg-white dark:bg-primary-very-dark-blue">
        <div
          className="w-[140px] h-[140px] overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: clickedPostData?.logoBackground }}
        >
          <img
            src={`.${clickedPostData?.logo}`}
            alt="logo"
            className="w-3/4 h-auto"
          />
        </div>
        <div className="ml-10 flex flex-row grow justify-between items-center">
          <div>
            <h1 className=" text-2xl text-primary-very-dark-blue dark:text-white font-bold mb-6">
              {clickedPostData?.company}
            </h1>
            <p className="text-secondary-dark-gray">
              {clickedPostData?.company.toLocaleLowerCase()}.com
            </p>
          </div>
          <div className="mr-10">
            <Button2>
              <a href={clickedPostData?.website} target="_blank">
                Company Site
              </a>
            </Button2>
          </div>
        </div>
      </div>
    </section>
  );
}
