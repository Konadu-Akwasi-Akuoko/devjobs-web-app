import React from "react";
import FormInput from "../FormInput";
import searchIcon from "@/assets/desktop/icon-search.svg";
import locationIcon from "@/assets/desktop/icon-location.svg";
import CheckBox from "../Checkbox";
import Button1 from "../Button1";

export default function SearchBar() {
  return (
    <div className="horizontal-margin flex flex-row bg-secondary-white dark:bg-primary-very-dark-blue -mt-10 rounded-md">
      <FormInput
        name="company"
        icon={searchIcon}
        width="w-[40%]"
        placeholder="Filter by title, companies, expertise…"
      />
      <FormInput
        name="location"
        icon={locationIcon}
        width="w-[30%]"
        placeholder="Filter by location…"
      />
      <div className="w-[30%] flex flex-row gap-8 justify-center items-center content-center">
        <CheckBox name="isFullTime" value="full-time" label="Full Time Only" />
        <Button1>Search</Button1>
      </div>
    </div>
  );
}
