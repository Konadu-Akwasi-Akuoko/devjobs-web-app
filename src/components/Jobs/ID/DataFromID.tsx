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
    console.log(clickedPostData);
  });
  return (
    <section className="horizontal-padding">{clickedPostData?.company}</section>
  );
}
