import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import StoreProvider from "../StoreProvider";

describe("Header", () => {
  it("should render the header with the logo", () => {
    render(
      <StoreProvider>
        <Header />
      </StoreProvider>
    );
    const header = screen.getByRole("banner");
    const logo = screen.getByAltText("logo");
    expect(header).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });
});
