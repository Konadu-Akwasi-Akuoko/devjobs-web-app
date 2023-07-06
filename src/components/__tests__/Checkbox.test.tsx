import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Checkbox from "../Checkbox";

describe("Checkbox", () => {
  it("should render a checkbox", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
});
