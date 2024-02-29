import { render, screen } from "@testing-library/react";
import { HelloWorld } from "src/components/helloWorld";

test("renders hello", () => {
  render(<HelloWorld />);
  const testText = screen.getByText(/hello/i);
  expect(testText).toBeInTheDocument();
});

test("renders scroll to explore", () => {
  render(<HelloWorld />);
  const testText = screen.getByText(/scroll to explore/i);
  expect(testText).toBeInTheDocument();
});
