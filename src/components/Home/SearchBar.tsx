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
  setSearchData,
} from "@/store/searchSlice";
import FilterButton from "./FilterButton";
import { selectCurrentData } from "@/store/jobsDataSlice";

export default function SearchBar() {
  const company = useSelector(selectCompanyState);
  const location = useSelector(selectLocationState);
  const isFullTime = useSelector(selectIsFullTimeState);
  // Get the current displaying data
  const jobsData = useSelector(selectCurrentData);

  const onCompanyFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(setCompany({ company: e.target.value, data: jobsData }));
    // Perform a full on search whenever something changes in the input
    store.dispatch(setSearchData(jobsData));
  };
  const onLocationFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(setLocation({ location: e.target.value, data: jobsData }));
    // Perform a full on search whenever something changes in the input of location
    store.dispatch(setSearchData(jobsData));
  };

  const onCheckBoxChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    store.dispatch(setIsFullTime({ isFullTime: !isFullTime, data: jobsData }));
    // Perform a full on search whenever something changes in the input of location
    store.dispatch(setSearchData(jobsData));
  };

  const onSearchButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    store.dispatch(setSearchData(jobsData));
  };

  return (
    <>
      {/* SearchBar for Desktop and Table */}
      <div className="horizontal-margin -mt-10 hidden flex-row rounded-md bg-secondary-white dark:bg-primary-very-dark-blue sm:flex">
        <FormInput
          name="company"
          icon={searchIcon}
          className="sm:w-3/12 xl:w-[40%]"
          placeholder="Filter by companies…"
          value={company}
          onChange={onCompanyFormChange}
        />
        <FormInput
          name="location"
          icon={locationIcon}
          className="sm:w-3/12 xl:w-[30%]"
          placeholder="Filter by location…"
          value={location}
          onChange={onLocationFormChange}
        />
        <div className="flex flex-row content-center items-center justify-center gap-8 sm:w-6/12 xl:w-[30%]">
          <CheckBox
            onClick={onCheckBoxChange}
            value={isFullTime}
            label="Full Time Only"
          />
          <Button1 onClick={onSearchButtonClick}>Search</Button1>
        </div>
      </div>

      {/* SearchBar for Mobile Phone */}
      <div className="horizontal-margin relative -mt-10 flex flex-row items-center justify-between rounded-md bg-secondary-white dark:bg-primary-very-dark-blue sm:hidden">
        <FormInput
          name="company"
          className="w-[60%]"
          placeholder="Filter by companies…"
          value={company}
          onChange={onCompanyFormChange}
        />

        <div className="flex flex-row items-center gap-4">
          <FilterButton />

          <div className="mr-4">
            <button
              className="rounded-5px bg-primary-violet p-3"
              onClick={onSearchButtonClick}
            >
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                  fill="#fff"
                  fillRule="nonzero"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
