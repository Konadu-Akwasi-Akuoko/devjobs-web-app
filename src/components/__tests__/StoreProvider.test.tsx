import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import StoreProvider from "../StoreProvider";

describe("Store provider", () => {
  it("should render the children components correctly", () => {
    render(
      <StoreProvider>
        <p data-testid="child">Hello world</p>
      </StoreProvider>
    );
    const pElement = screen.getByTestId("child");
    expect(pElement).toBeInTheDocument();
    expect(pElement).toHaveTextContent("Hello world");
  });
});
