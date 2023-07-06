import "@testing-library/jest-dom/extend-expect";
import { render, within } from "@testing-library/react";
import SearchBar from "../SearchBar";
import StoreProvider from "@/components/StoreProvider";

describe("SearchBar", () => {
  it("Should render the search bar correctly", () => {
    const { container } = render(
      <StoreProvider>
        <SearchBar />
      </StoreProvider>
    );

    within(container).getByTestId("button1");
    within(container).getAllByTestId("form-input");
  });
});
