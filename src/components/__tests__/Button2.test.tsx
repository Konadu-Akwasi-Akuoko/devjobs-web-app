import React from "react";
import { render, screen } from "@testing-library/react";
// Extend the expect to make it work for react testing library
import "@testing-library/jest-dom/extend-expect";
import Button2 from "../Button2";

describe("Button2", () => {
  // Test 1
  it("should render a button with the given text", () => {
    render(<Button2>Click me</Button2>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
  });
  // Test 2
  it("should render a button with the given element", () => {
    render(
      <Button2>
        <a data-testid="descendant" href="/">
          Home
        </a>
      </Button2>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    // Check to see if the button contains the given element
    expect(button).toContainElement(screen.getByTestId("descendant"));
  });
});
