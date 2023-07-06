import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "../Checkbox";

describe("Checkbox", () => {
  it("should render a checkbox and call the function when clicked", () => {
    const mockOnClick = jest.fn();
    render(
      <Checkbox
        label="Testing the checkbox component"
        onClick={mockOnClick}
        value={true}
      />
    );
    const checkbox = screen.getByTestId("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeInTheDocument();
    expect(mockOnClick).toHaveBeenCalled();
  });
});
