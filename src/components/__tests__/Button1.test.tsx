import React from "react";
import { render, screen } from "@testing-library/react";
// Extend the expect to make it work for react testing library
import "@testing-library/jest-dom/extend-expect";
import Button1 from "../Button1";

describe("Button1", () => {
  // Test 1
  it("should render a button with the given text", () => {
    render(<Button1>Click me</Button1>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
  });
  // Test 2
  it("should render a button with the given element", () => {
    render(
      <Button1>
        <a data-testid="descendant" href="/">
          Home
        </a>
      </Button1>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    // Check to see if the button contains the given element
    expect(button).toContainElement(screen.getByTestId("descendant"));
  });
});
