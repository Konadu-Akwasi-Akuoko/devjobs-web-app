import "@testing-library/jest-dom/extend-expect";
import {
  render,
  screen,
  fireEvent,
  within,
  waitFor,
} from "@testing-library/react";
import JobSection from "../JobsSection";
import { Provider } from "react-redux";
import { store } from "@/store/store";

describe("JobSection component", () => {
  test("renders JobSection component", async () => {
    const { container } = render(
      <Provider store={store}>
        <JobSection />
      </Provider>
    );

    await waitFor(() => {
      within(container).getByText("Scoot");
      within(container).getByText("Vector");
      within(container).getByText("Blogr");
      within(container).getByText("Office Lite");
      within(container).getByText("Pod");
    });
  });
});
