import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import FilterButton from "../FilterButton";
import { store } from "@/store/store";

describe("FilterButton", () => {
  it("should render the filter button and the modal correctly", () => {
    render(
      <Provider store={store}>
        <FilterButton />
      </Provider>
    );

    expect(screen.getByRole("button")).toBeVisible();

    fireEvent.click(screen.getByRole("button"));

    expect(
      screen.getByPlaceholderText("Filter by location…")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });
});
