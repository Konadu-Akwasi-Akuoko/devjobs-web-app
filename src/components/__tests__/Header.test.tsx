import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("should render the header with the logo", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    const logo = screen.getByAltText("logo");
    expect(header).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });
});
