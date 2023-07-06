import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ThemeProvider from "../ThemeProvider";
import StoreProvider from "../StoreProvider";

describe("ThemeProvider", () => {
  it("Should render the children", () => {
    render(
      <StoreProvider>
        <ThemeProvider>
          <p>This is a child element</p>
        </ThemeProvider>
      </StoreProvider>
    );
    const childElement = document.querySelector("p");
    expect(childElement).toHaveTextContent("This is a child element");
  });
});
