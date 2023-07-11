"use client";
import {
  loadClickedPost,
  loadInitialPosts,
  selectData,
} from "@/store/jobsDataSlice";
import data from "@/data.json";
import { selectClickedData } from "@/store/searchSlice";
import { store } from "@/store/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ID({ params }: { params: { id: string } }) {
  const clickedPostData = useSelector(selectClickedData);
  const allData = useSelector(selectData);
  useState(async () => {
    if (allData.length === 0) {
      await store.dispatch(loadInitialPosts(data));
    }
    await store.dispatch(loadClickedPost(Number(params.id)));
  });
  return <section className="horizontal-padding">{params.id}</section>;
}
