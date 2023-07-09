import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Modal from "../Modal";

describe("Modal", () => {
  it("should render the children inside the modal", () => {
    render(
      <Modal>
        <p data-testid="modal-content">This is an example of a modal</p>
      </Modal>
    );

    expect(screen.getByTestId("modal-content")).toBeInTheDocument();
  });
});
