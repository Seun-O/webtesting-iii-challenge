// Test away
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";
import Controls from "../controls/Controls";
import Display from "../display/Display";

//Cleans up after each test case
afterEach(() => cleanup());

//Test to see if all components with in Dashboard including dashboard renders.
it("renders components Dashboard, Display, Controls", () => {
  const userComponents = [<Dashboard />, <Display />, <Controls />];
  userComponents.map(component => render(component));
});
