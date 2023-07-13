"use client";
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
import PositionAndApply from "./PositionAndApply";
import Description from "./Description";
import WhatYouWillDo from "./WhatYouWillDo";
import Requirements from "./Requirements";
import Footer from "./Footer";

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
        <div className="mt-8 rounded-md bg-white p-6 dark:bg-primary-very-dark-blue sm:p-12">
          <PositionAndApply clickedPostData={clickedPostData} />

          {/* Description */}
          <Description clickedPostData={clickedPostData} />

          {/* Requirements  */}
          <Requirements clickedPostData={clickedPostData} />

          {/* What you will do */}
          <WhatYouWillDo clickedPostData={clickedPostData} />
        </div>
      </section>

      {/* Footer for ClickedData only! */}
      <Footer clickedPostData={clickedPostData} />
    </>
  );
}
