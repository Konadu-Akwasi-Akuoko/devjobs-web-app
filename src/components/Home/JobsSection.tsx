"use client";
import React, { useEffect } from "react";
import JobCard from "./JobCard";
import Button1 from "../Button1";
import { store } from "@/store/store";
import {
  loadInitialPosts,
  loadMorePosts,
  selectCurrentData,
  selectIndexOfLastPost,
} from "@/store/jobsDataSlice";
import { useSelector } from "react-redux";
import data from "@/data.json";
import {
  selectIsSearching,
  selectSearchData,
  setSearchData,
} from "@/store/searchSlice";

export default function JobSection() {
  useEffect(() => {
    store.dispatch(loadInitialPosts(data));
  }, []);

  const jobsData = useSelector(selectCurrentData);
  const indexOfLastPost = useSelector(selectIndexOfLastPost);
  const isSearching = useSelector(selectIsSearching);
  const searchData = useSelector(selectSearchData);

  const loadMorePostsOnClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // The await here is to make sure that the posts are loaded before the search data is set
    store.dispatch(loadMorePosts(indexOfLastPost));
    store.dispatch(setSearchData(jobsData));
  };

  return (
    <>
      <div className="horizontal-padding mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 ">
        {/* If isSearching is true, render the search data */}
        {isSearching
          ? searchData.map((job) => {
              return (
                <JobCard
                  key={job.id}
                  id={job.id}
                  company={job.company}
                  logo={job.logo}
                  logoBackground={job.logoBackground}
                  position={job.position}
                  postedAt={job.postedAt}
                  contract={job.contract}
                  location={job.location}
                />
              );
            })
          : jobsData.map((job) => {
              return (
                <JobCard
                  key={job.id}
                  id={job.id}
                  company={job.company}
                  logo={job.logo}
                  logoBackground={job.logoBackground}
                  position={job.position}
                  postedAt={job.postedAt}
                  contract={job.contract}
                  location={job.location}
                />
              );
            })}
      </div>
      <div className="mt-14 flex w-full justify-center pb-28">
        <Button1 onClick={loadMorePostsOnClick}>Load More</Button1>
      </div>
    </>
  );
}
