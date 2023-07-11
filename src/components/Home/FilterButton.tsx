import React from "react";
import Modal from "../Modal";
import FormInput from "../FormInput";
import Button1 from "../Button1";
import CheckBox from "../Checkbox";
import { useSelector } from "react-redux";
import { changeStateOfModal, selectModal } from "@/store/modalSlice";
import locationIcon from "@/assets/desktop/icon-location.svg";
import {
  selectIsFullTimeState,
  selectLocationState,
  setIsFullTime,
  setLocation,
  setSearchData,
} from "@/store/searchSlice";
import { store } from "@/store/store";
import { selectCurrentData } from "@/store/jobsDataSlice";

export default function FilterButton() {
  const renderModal = useSelector(selectModal);
  const isFullTime = useSelector(selectIsFullTimeState);
  const location = useSelector(selectLocationState);
  const jobsData = useSelector(selectCurrentData);

  const onLocationFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(setLocation({ location: e.target.value, data: jobsData }));
  };

  const onCheckBoxChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    store.dispatch(setIsFullTime({ isFullTime: !isFullTime, data: jobsData }));
  };

  const onSearchButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    store.dispatch(setSearchData(jobsData));
    store.dispatch(changeStateOfModal(false));
  };

  const onFilterButtonClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    store.dispatch(changeStateOfModal(true));
  };

  return (
    <>
      <div>
        <button className="p-3" onClick={onFilterButtonClicked}>
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
            <div className="h-[1px] w-full bg-secondary-light-gray dark:bg-slate-500" />
            <div className="p-6">
              <CheckBox
                onClick={onCheckBoxChange}
                value={isFullTime}
                label="Full Time Only"
              />
            </div>
            <div className="px-6 pb-6">
              <Button1 className="w-full" onClick={onSearchButtonClick}>
                Search
              </Button1>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
