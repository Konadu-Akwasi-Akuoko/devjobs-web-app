import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import JobSection from "../JobsSection";
import React from "react";
// mock the next/link component
jest.mock("next/link", () => {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => {
    return <a href="/">{children}</a>;
  };
});

// mock the data for the component
const mockData = [
  {
    id: 1,
    company: "Amalitech",
    logo: "/images/Amalitech.svg",
    logoBackground: "hsl(180, 29%, 50%)",
    position: "Senior Frontend Developer",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "Togo",
  },
  {
    id: 2,
    company: "MTN",
    logo: "/images/MTN.svg",
    logoBackground: "hsl(180, 29%, 50%)",
    position: "Fullstack Developer",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "Remote",
  },
  {
    id: 3,
    company: "FaceBook",
    logo: "/images/FaceBook.svg",
    logoBackground: "hsl(180, 29%, 50%)",
    position: "Junior Frontend Developer",
    postedAt: "3d ago",
    contract: "Internship",
    location: "Ghana",
  },
];

describe("JobSection component", () => {
  it("should render the component with the given data", () => {
    render(<JobSection jobsData={mockData} />);

    const jobCards = screen.getAllByRole("link");
    expect(jobCards).toHaveLength(3);

    expect(jobCards[0]).toHaveAttribute("href", "/");
    expect(screen.getByText("Senior Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("Amalitech")).toBeInTheDocument();
    expect(screen.getByText("1d ago")).toBeInTheDocument();
    expect(screen.getByText("Full Time")).toBeInTheDocument();
    expect(screen.getByText("Togo")).toBeInTheDocument();

    expect(jobCards[1]).toHaveAttribute("href", "/");
    expect(screen.getByText("Fullstack Developer")).toBeInTheDocument();
    expect(screen.getByText("MTN")).toBeInTheDocument();
    expect(screen.getByText("2d ago")).toBeInTheDocument();
    expect(screen.getByText("Part Time")).toBeInTheDocument();
    expect(screen.getByText("Remote")).toBeInTheDocument();

    expect(jobCards[2]).toHaveAttribute("href", "/");
    expect(screen.getByText("Junior Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("FaceBook")).toBeInTheDocument();
    expect(screen.getByText("3d ago")).toBeInTheDocument();
    expect(screen.getByText("Internship")).toBeInTheDocument();
    expect(screen.getByText("Ghana")).toBeInTheDocument();
  });
});
