import { fireEvent } from "@storybook/testing-library";
import { render, screen, waitFor } from "@testing-library/react";
import { shallow } from "enzyme";
import Card from "./Card";
import Adapter from 'enzyme-adapter-react-16';

test("renders card and modal on click", async () => {
  const repo = {
    updated_at: new Date(),
    name: "name",
    owner: {
      login: "login",
    },
  };
  render(<Card repo={repo} />);
  const card = screen.getByTestId("card");
  expect(card).toBeInTheDocument();
  fireEvent.click(card);
  expect(document.getElementById("wrapper")).toBeInTheDocument();
});
