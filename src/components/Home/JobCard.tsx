/* eslint-disable @next/next/no-img-element */
import React from "react";
import { miniJobDataType } from "@/types/types";
import Link from "next/link";

export default function JobCard({
  id,
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
}: miniJobDataType) {
  return (
    <Link href={`/jobs/${id}`}>
      <div className="p-8 h-full bg-white dark:bg-primary-very-dark-blue rounded-md">
        <div className="relative">
          <div
            className="w-[50px] h-[50px] absolute -top-14 left-0 flex items-center justify-center rounded-[15px] overflow-hidden"
            style={{ background: logoBackground }}
          >
            <img src={logo} alt="logo" loading="lazy" decoding="async" />
          </div>
        </div>

        <div className="mt-6 flex flex-row gap-3 ">
          <p className="text-secondary-dark-gray">{postedAt}</p>
          <p className="text-3xl -mt-3 text-secondary-dark-gray">.</p>
          <p className="text-secondary-dark-gray">{contract}</p>
        </div>
        <div className="mt-3">
          <h2 className="text-2xl font-bold text-primary-very-dark-blue dark:text-white">
            {position}
          </h2>
        </div>
        <div className="mt-4">
          <p className="text-secondary-dark-gray">{company}</p>
        </div>
        <div className="mt-11 mb-1">
          <p className="font-bold text-sm text-primary-violet">{location}</p>
        </div>
      </div>
    </Link>
  );
}
