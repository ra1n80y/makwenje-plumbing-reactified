import { describe, it, expect } from "vitest";
import { render, screen } from "../test-utils";
import ContactPage from "./ContactPage";

describe("ContactPage", () => {
  it("renders contact cards with images", () => {
    render(<ContactPage />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByAltText("Instagram")).toBeInTheDocument();
    expect(screen.getByAltText("Gmail")).toBeInTheDocument();
    expect(screen.getByAltText("Twitter")).toBeInTheDocument();
  });
});
