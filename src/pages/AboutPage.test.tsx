import { describe, it, expect } from "vitest";
import { render, screen } from "../test-utils";
import AboutPage from "./AboutPage";

describe("AboutPage", () => {
  it("renders main sections", () => {
    render(<AboutPage />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(
      screen.getByText(/Makwenje Plumbing is committed/i),
    ).toBeInTheDocument();
    expect(screen.getByText("Our Values")).toBeInTheDocument();
    expect(screen.getByText("About the Founder")).toBeInTheDocument();
  });
});
