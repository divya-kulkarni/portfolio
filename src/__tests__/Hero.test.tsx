import { render, screen } from "@testing-library/react";
import { Hero } from "src/components/hero";
import userEvent from "@testing-library/user-event";

test("renders hero", () => {
  render(<Hero />);
  const testText = screen.getByText(/front-end web developer/i);
  expect(testText).toBeInTheDocument();
});

test("renders say hi", async () => {
  render(<Hero />);
  const testText = screen.getByText(/say hi/i);
  expect(testText).toBeInTheDocument();

  const originalLocation = window.location;
  delete (window as any).location;
  (window as any).location = { assign: jest.fn() };
  userEvent.click(testText);
  await (() => {
    expect((window.location as any).assign).toHaveBeenCalledWith("/contact");
  });

  window.location = originalLocation;
});

test("renders hero name", () => {
  render(<Hero />);
  const testText = screen.getByText(/divya kulkarni/i);
  expect(testText).toBeInTheDocument();
});
