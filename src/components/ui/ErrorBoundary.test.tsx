import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";
import { describe, it, vi, expect } from "vitest";

const ThrowError = () => {
  throw new Error("Test error");
};

describe("ErrorBoundary", () => {
  it("renders fallback when child throws", () => {
    // Suppress console.error for the thrown error
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    );

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    spy.mockRestore();
  });

  it("renders children normally when no error", () => {
    render(
      <ErrorBoundary>
        <div>No error here</div>
      </ErrorBoundary>,
    );
    expect(screen.getByText("No error here")).toBeInTheDocument();
  });
});
