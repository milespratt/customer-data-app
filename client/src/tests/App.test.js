import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders Welcome back, Customer Administrator", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Welcome back, Customer Administrator/i);
  expect(textElement).toBeInTheDocument();
});
