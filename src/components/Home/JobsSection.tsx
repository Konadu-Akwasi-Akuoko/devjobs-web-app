"use client";
import React, { useEffect } from "react";
import JobCard from "./JobCard";
import Button1 from "../Button1";
import { store } from "@/store/store";
import { initialPosts, selectData } from "@/store/paginationSlice";
import { useSelector } from "react-redux";
import data from "@/data.json";

export default function JobSection() {
  useEffect(() => {
    store.dispatch(initialPosts(data));
  }, []);

  const jobsData = useSelector(selectData);

  return (
    <>
      <div className="horizontal-padding mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 ">
        {jobsData.map((job) => {
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
      <div className="flex justify-center w-full mt-14 pb-28">
        <Button1>Load More</Button1>
      </div>
    </>
  );
}
