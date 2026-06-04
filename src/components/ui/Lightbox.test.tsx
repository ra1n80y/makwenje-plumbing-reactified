import { render, screen, fireEvent } from "@testing-library/react";
import Lightbox from "./Lightbox";
import { describe, vi, beforeEach, it, expect } from "vitest";

describe("Lightbox", () => {
  const onClose = vi.fn();

  beforeEach(() => {
    onClose.mockClear();
  });

  it("renders the image and calls onClose when overlay is clicked", () => {
    render(<Lightbox src="/test.jpg" onClose={onClose} />);

    const img = screen.getByAltText("Enlarged gallery");
    expect(img).toBeInTheDocument();

    // Click the overlay (parent of the image)
    const overlay = img.parentElement;
    fireEvent.click(overlay!);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose on Escape key", () => {
    render(<Lightbox src="/test.jpg" onClose={onClose} />);
    fireEvent.keyDown(window, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
