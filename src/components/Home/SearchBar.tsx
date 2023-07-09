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
import { selectModal } from "@/store/modalSlice";
import Modal from "../Modal";

export default function SearchBar() {
  const company = useSelector(selectCompanyState);
  const location = useSelector(selectLocationState);
  const isFullTime = useSelector(selectIsFullTimeState);
  const renderModal = useSelector(selectModal);
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
    <>
      {/* SearchBar for Desktop and Table */}
      <div className="horizontal-margin hidden sm:flex flex-row bg-secondary-white dark:bg-primary-very-dark-blue -mt-10 rounded-md">
        <FormInput
          name="company"
          icon={searchIcon}
          className="xl:w-[40%] sm:w-3/12"
          placeholder="Filter by title, companies, expertise…"
          value={company}
          onChange={onCompanyFormChange}
        />
        <FormInput
          name="location"
          icon={locationIcon}
          className="xl:w-[30%] sm:w-3/12"
          placeholder="Filter by location…"
          value={location}
          onChange={onLocationFormChange}
        />
        <div className="xl:w-[30%] sm:w-6/12 flex flex-row gap-8 justify-center items-center content-center">
          <CheckBox
            onClick={onCheckBoxChange}
            value={isFullTime}
            label="Full Time Only"
          />
          <Button1>Search</Button1>
        </div>
      </div>

      {/* SerchBar for Mobile Phone */}
      <div className="horizontal-margin flex flex-row justify-between items-center sm:hidden bg-secondary-white dark:bg-primary-very-dark-blue -mt-10 rounded-md relative">
        <FormInput
          name="company"
          className="w-[60%]"
          placeholder="Filter by title…"
          value={company}
          onChange={onCompanyFormChange}
        />

        <div className="flex flex-row gap-4 items-center">
          <div>
            <button className="p-3">
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                  fill="#6E8098"
                  fillRule="nonzero"
                />
              </svg>
            </button>
          </div>

          {/* Modal */}
          {renderModal && (
            <Modal>
              <div>
                <FormInput
                  name="location"
                  icon={locationIcon}
                  className="w-full px-6"
                  placeholder="Filter by location…"
                  value={location}
                  onChange={onLocationFormChange}
                />
                <div className="h-[2px] w-full bg-secondary-light-gray" />
                <div className="p-6">
                  <CheckBox
                    onClick={onCheckBoxChange}
                    value={isFullTime}
                    label="Full Time Only"
                  />
                </div>
                <div className="px-6 pb-6">
                  <Button1 className="w-full">Search</Button1>
                </div>
              </div>
            </Modal>
          )}

          <div className="mr-4">
            <button className="bg-primary-violet p-3 rounded-5px">
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
