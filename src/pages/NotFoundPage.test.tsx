import { describe, it, expect } from "vitest";
import { render, screen } from "../test-utils.tsx";
import NotFoundPage from "./NotFoundPage";

describe("NotFoundPage", () => {
  it("renders 404 and a home link", () => {
    render(<NotFoundPage />);
    expect(screen.getByText("404")).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /go back home/i });
    expect(link).toHaveAttribute("href", "/");
  });
});
