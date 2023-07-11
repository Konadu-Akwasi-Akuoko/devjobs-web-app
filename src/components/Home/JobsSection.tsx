import React from "react";
import JobCard from "./JobCard";
import { miniJobDataType } from "@/types/types";

export default function JobSection({
  jobsData,
}: {
  jobsData: miniJobDataType[];
}) {
  return (
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
  );
}
