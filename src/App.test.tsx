import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test("renders hero", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const testText = screen.getByText(/hello/i);
  expect(testText).toBeInTheDocument();
});

test("landing on invalid route shows 404 page", () => {
  render(
    <MemoryRouter initialEntries={["/random"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/where are you going/i)).toBeInTheDocument();
});

test("open resume in new tab", async () => {
  const originalOpen = window.open;
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const resumeLink = screen.getByText(/resume/i);
  expect(resumeLink).toBeInTheDocument();
  if (!resumeLink) {
    console.error("Resume link not found");
    return;
  }
  userEvent.click(resumeLink);
  await (() => {
    expect(window.open).toHaveBeenCalledTimes(1);
  });
  window.open = originalOpen;
});
