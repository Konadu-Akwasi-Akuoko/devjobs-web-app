import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import JobCard from "../JobCard";
import React from "react";

jest.mock("next/link", () => {
  return ({ children }: { children: React.ReactNode }) => {
    return children;
  };
});

const mockData = {
  id: 1,
  company: "Amalitech",
  logo: "/images/Amalitech.svg",
  logoBackground: "hsl(0,0,0)",
  position: "Senior Frontend Developer",
  postedAt: "1d ago",
  contract: "Full Time",
  location: "Ghana",
};

describe("JobCard component", () => {
  it("should render the component with the given data", () => {
    render(<JobCard {...mockData} />);

    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/images/Amalitech.svg");

    expect(screen.getByText("1d ago")).toBeInTheDocument();
    expect(screen.getByText("Full Time")).toBeInTheDocument();
    expect(screen.getByText("Ghana")).toBeInTheDocument();

    expect(screen.getByText("Senior Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("Amalitech")).toBeInTheDocument();
  });
});
