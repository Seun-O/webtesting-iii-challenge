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

it("should have a button", () => {
  const { getByText } = render(<Controls />);
  const close_gate = getByText(/close gate/i || /open gate/i);
});
