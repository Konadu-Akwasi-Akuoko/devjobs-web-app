import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterButton from "../FilterButton";
import StoreProvider from "@/components/StoreProvider";

describe("FilterButton", () => {
  it("should render the filter button and the modal correctly", () => {
    render(
      <StoreProvider>
        <FilterButton />
      </StoreProvider>
    );

    expect(screen.getByRole("button")).toBeVisible();

    fireEvent.click(screen.getByRole("button"));

    expect(
      screen.getByPlaceholderText("Filter by location…")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });
});
