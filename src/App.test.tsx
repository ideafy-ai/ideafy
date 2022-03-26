import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router";
import Landing from "./pages/Landing";

test("renders header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Github Fetch/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders landing page", () => {
  render(
    <MemoryRouter>
      <Landing />
    </MemoryRouter>
  );
  const title = screen.getByTestId("landing-title");
  const paragraph = screen.getByTestId("landing-paragraph");

  expect(title).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
});
