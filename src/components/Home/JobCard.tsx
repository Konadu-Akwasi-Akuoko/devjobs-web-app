import React from "react";
import data from "@/data.json";
import img from "@/assets/logos/blogr.svg";
import Image from "next/image";

export default function JobCard() {
  return (
    <div className="p-8 bg-white dark:bg-primary-very-dark-blue rounded-md">
      {/* Image */}
      <div
        className="w-[50px] h-[50px] flex items-center justify-center rounded-[15px] overflow-hidden -mt-[20%]"
        style={{ background: "hsl(36, 87%, 49%)" }}
      >
        <Image src={img} alt="logo" />
      </div>
      <div className="mt-6 flex flex-row gap-3 ">
        <p className="text-secondary-dark-gray">5h ago</p>
        <p className="text-3xl -mt-3 text-secondary-dark-gray">.</p>
        <p className="text-secondary-dark-gray">Full Time</p>
      </div>
    </div>
  );
}
