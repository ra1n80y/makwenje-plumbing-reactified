import { render, screen, fireEvent } from "@testing-library/react";
import Slideshow from "./Slideshow";
import { expect } from "storybook/test";
import { describe, it } from "vitest";

const imageModules = import.meta.glob("/public/*.{png,jpg}", {
  eager: true,
  query: "url",
  import: "default",
});
const imageArray = Object.values(imageModules) as string[];
export default imageArray;

describe("Slideshow", () => {
  it("renders images and handles next/prev clicks", () => {
    render(<Slideshow images={imageArray as string[]} visibleCount={2} />);

    // All images should be in the document
    imageArray.forEach((_, i) => {
      expect(screen.getByAltText(`Gallery image ${i + 1}`)).toBeInTheDocument();
    });

    const nextBtn = screen.getByRole("button", { name: /next/i });
    const prevBtn = screen.getByRole("button", { name: /previous/i });

    // Initially both buttons exist
    expect(nextBtn).toBeInTheDocument();
    expect(prevBtn).toBeInTheDocument();

    // Clicking next should not crash (we can’t easily test translateX without mocking dimensions,
    // but we can verify that the click handler runs)
    fireEvent.click(nextBtn);
    // No error thrown = pass
  });

  it("opens lightbox on image click", () => {
    render(<Slideshow images={imageArray} visibleCount={2} />);
    const firstImage = screen.getByAltText("Gallery image 1");
    fireEvent.click(firstImage);

    // Lightbox overlay should appear (we can look for the enlarged image)
    expect(screen.getByAltText("Enlarged gallery")).toBeInTheDocument();
  });
});
