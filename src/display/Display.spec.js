// Test away!
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";

import Display from "./Display";

//Cleans up after each test case
afterEach(() => cleanup());

//Test to see if the component renders.
it("renders without crashing ", () => {
  render(<Display />);
});

// Takes a closed and locked variable to simulate props in the component
it("Should display if gate open/closed and locked/unlocked", () => {
  const closed = false;
  const locked = false;

  const { getByText } = render(<Display closed={closed} locked={locked} />);
  // if closed and locked are true gate is closed and locked
  if (closed === true && locked === true) {
    const closedClass = getByText(/closed/i);
    const lockedClass = getByText(/locked/i);

    // Each element will have the led red class
    expect(closedClass).toHaveClass("led red-led");
    expect(lockedClass).toHaveClass("led red-led");
  }
  // closed and locked are set to false
  if (closed === false && locked === false) {
    const closedClass = getByText(/open/i);
    const lockedClass = getByText(/unlocked/i);

    //Each element will have the led green class
    expect(closedClass).toHaveClass("led green-led");
    expect(lockedClass).toHaveClass("led green-led");
  }
});
