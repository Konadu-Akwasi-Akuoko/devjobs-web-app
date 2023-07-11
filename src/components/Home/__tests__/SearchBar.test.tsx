import "@testing-library/jest-dom/extend-expect";
import { render, within, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";
import StoreProvider from "@/components/StoreProvider";
import { store } from "@/store/store";
import {
  selectCompanyState,
  selectIsFullTimeState,
  selectLocationState,
} from "@/store/searchSlice";

describe("SearchBar", () => {
  it("Should render the search bar correctly", () => {
    const { container } = render(
      <StoreProvider>
        <SearchBar />
      </StoreProvider>
    );

    within(container).getAllByTestId("button1");
    within(container).getAllByTestId("form-input");
  });

  it("Should update the company state when typing in the company input", () => {
    const { container } = render(
      <StoreProvider>
        <SearchBar />
      </StoreProvider>
    );

    const companyInput = within(container).getAllByPlaceholderText(
      "Filter by companies…"
    );
    fireEvent.change(companyInput[0], { target: { value: "Amalitech" } });
    expect(selectCompanyState(store.getState())).toBe("Amalitech");
  });

  it("Should update the location state when typing in the location input", () => {
    const { container } = render(
      <StoreProvider>
        <SearchBar />
      </StoreProvider>
    );

    const locationInput = within(container).getAllByPlaceholderText(
      "Filter by location…"
    );
    fireEvent.change(locationInput[0], { target: { value: "Accra" } });
    expect(selectLocationState(store.getState())).toBe("Accra");
  });

  it("Should update the isFullTime state when clicking on the checkbox", () => {
    const { container } = render(
      <StoreProvider>
        <SearchBar />
      </StoreProvider>
    );

    const checkBox = within(container).getAllByTestId("checkbox");
    fireEvent.click(checkBox[0]);
    expect(selectIsFullTimeState(store.getState())).toBe(true);
  });
});
