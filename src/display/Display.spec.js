// Test away!
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

import Display from "./Display";

//Cleans up after each test case
afterEach(() => cleanup());

//Test to see if the component renders.
it("renders without crashing ", () => {
  render(<Display />);
});
