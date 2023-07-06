"use client";
import React from "react";
import FormInput from "../FormInput";
import searchIcon from "@/assets/desktop/icon-search.svg";
import locationIcon from "@/assets/desktop/icon-location.svg";
import CheckBox from "../Checkbox";
import Button1 from "../Button1";
import { useSelector } from "react-redux";
import { store } from "@/store/store";
import {
  selectCompanyState,
  selectIsFullTimeState,
  selectLocationState,
  setCompany,
  setIsFullTime,
  setLocation,
} from "@/store/searchSlice";

export default function SearchBar() {
  const company = useSelector(selectCompanyState);
  const location = useSelector(selectLocationState);
  const isFullTime = useSelector(selectIsFullTimeState);
  const onCompanyFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(setCompany(e.target.value));
  };
  const onLocationFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(setLocation(e.target.value));
  };

  const onCheckBoxChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    store.dispatch(setIsFullTime(!isFullTime));
  };
  return (
    <div className="horizontal-margin flex flex-row bg-secondary-white dark:bg-primary-very-dark-blue -mt-10 rounded-md">
      <FormInput
        name="company"
        icon={searchIcon}
        width="w-[40%]"
        placeholder="Filter by title, companies, expertise…"
        value={company}
        onChange={onCompanyFormChange}
      />
      <FormInput
        name="location"
        icon={locationIcon}
        width="w-[30%]"
        placeholder="Filter by location…"
        value={location}
        onChange={onLocationFormChange}
      />
      <div className="w-[30%] flex flex-row gap-8 justify-center items-center content-center">
        <CheckBox
          onClick={onCheckBoxChange}
          value={isFullTime}
          label="Full Time Only"
        />
        <Button1>Search</Button1>
      </div>
    </div>
  );
}
