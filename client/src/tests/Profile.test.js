import React from "react";
import { render, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Profile from "../views/Profile";
import * as util from "../util";

// test("renders the profile", () => {
//   render(
//     <Router>
//       <Profile />
//     </Router>
//   );
// });

test("it should perform an API call and render the customer info", async () => {
  const data = [{ customer: "value" }];
  const promise = Promise.resolve({
    data,
  });
  util.apiCall = jest.fn(() => promise);
  await act(async () => {
    render(
      <Router>
        <Profile />
      </Router>
    );
  });
});
