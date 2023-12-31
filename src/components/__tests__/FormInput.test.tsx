import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormInput from "../FormInput";
import searchIcon from "@/assets/desktop/icon-search.svg";
import { ChangeEvent } from "react";

describe("Form Input", () => {
  it("should render a form input with an icon", async () => {
    const user = userEvent.setup();
    render(
      <FormInput
        name="form-input"
        icon={searchIcon}
        placeholder="This is a form input"
        className="w-[200px]"
        data-testid="form-input"
        value={""}
        onChange={function (e: ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    // Get the form input and form image and test them
    const formInput = screen.getByRole("textbox");
    const formImg = screen.getByRole("img");

    expect(formInput).toBeInTheDocument();
    // await user.type(formInput, "Hello world");
    // expect(formInput).toHaveValue("Hello world");

    expect(formImg).toBeInTheDocument();
    expect(formImg).toHaveAttribute("alt", "icon");
  });
});
