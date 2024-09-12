// Test away!
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";

import Controls from "./Controls";

//Cleans up after each test case
afterEach(() => cleanup());

//Test to see if the component renders.
it("renders without crashing ", () => {
  render(<Controls />);
});

//Checks for button with text close gate or open gate
//Test implicit deny regex -i close gate  or open gate
it("should have a open gate or close gate button", () => {
  const onClick = jest.fn();
  const { getByText } = render(<Controls toggleClosed={onClick} />);
  const rightButton = getByText(/close gate/i || /open gate/i);
  fireEvent.click(rightButton);

  expect(onClick).toHaveBeenCalled();
});

//Checks for button with text lock gate or unlock gate
//Test implicit deny regex -i lock gate  or unlock gate
it("should have a lock gate or unlock gate button", () => {
  const { getByText } = render(<Controls />);
  const leftButton = getByText(/lock gate/i || /unlock gate/i);
  // Assertion to check the button is in the document and is disabled
  expect(leftButton).toBeInTheDocument();
  expect(leftButton).toBeDisabled();
});

it("buttons should be disabled based on locked/closed status", () => {
  const locked = true;
  const closed = false;

  const { getByText } = render(<Controls locked={locked} closed={closed} />);
  if (locked === true) {
    const rightButton = getByText(/close gate/i);
    expect(rightButton).toBeDisabled();
  }
  if (closed === false) {
    const leftButton = getByText(/lock gate/i);
    expect(leftButton).toBeDisabled();
  }
});
