import React, { useEffect, useState } from "react";
import { act, findByTestId, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import Search from "./Search";
import SearchBar from "../components/SearchBar";
import { MemoryRouter } from "react-router";
import { wait } from "@testing-library/user-event/dist/utils";
import App from "../App";
import Router from "../router";

test("renders user search", () => {
  render(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
  );
  const searchUsername = document.getElementById("username");
  expect(searchUsername).toBeInTheDocument();
});

test("renders repository filter", () => {
  const { getByTestId, rerender } = render(
    <MemoryRouter initialEntries={["/search/Dopeamin"]}>
      <Search />
    </MemoryRouter>
  );
  const searchRepo = document.getElementById("repository");
  expect(searchRepo).toBeInTheDocument();
});

test("search filtering working", async () => {
  render(
    <MemoryRouter initialEntries={["/search/Dopeamin"]}>
      <Router />
    </MemoryRouter>
  );
  const searchRepo = document.getElementById("repository") as HTMLInputElement;
  expect(document.getElementsByTagName("span")[0]).toBeInTheDocument();

  await waitForElementToBeRemoved(() => document.getElementsByTagName("span")[0]);
  expect(document.getElementById("card")).toBeInTheDocument();
  searchRepo.value = "angularrrrrrr";
  await fireEvent.keyPress(searchRepo, { key: "Enter" });
  await screen.findAllByTestId("card");
});
