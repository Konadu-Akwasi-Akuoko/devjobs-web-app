"use client";
/* eslint-disable @next/next/no-img-element */
import React, { MouseEventHandler } from "react";
import { miniJobDataType } from "@/types/types";
import Link from "next/link";
import { store } from "@/store/store";
import { loadClickedPost } from "@/store/jobsDataSlice";

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
      <div className="h-full rounded-md bg-white p-8 dark:bg-primary-very-dark-blue">
        <div className="relative">
          <div
            className="absolute -top-14 left-0 flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-[15px]"
            style={{ background: logoBackground }}
          >
            <img src={logo} alt="logo" loading="lazy" decoding="async" />
          </div>
        </div>

        <div className="mt-6 flex flex-row gap-3 ">
          <p className="text-secondary-dark-gray">{postedAt}</p>
          <p className="-mt-3 text-3xl text-secondary-dark-gray">.</p>
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
        <div className="mb-1 mt-11">
          <p className="text-sm font-bold text-primary-violet">{location}</p>
        </div>
      </div>
    </Link>
  );
}
