import React from "react";
import { render, act } from "@testing-library/react";
import DataTable from "../components/DataTable";
import { BrowserRouter as Router } from "react-router-dom";
import * as util from "../util";

test("it should render without props", () => {
  render(<DataTable />);
});

test("it should render with data", () => {
  const data = [{ key: "value" }];
  render(<DataTable data={data} />);
});

test("it should render with empty data", () => {
  const data = [];
  render(<DataTable data={data} />);
});

test("it should render links when given path and param", () => {
  const data = [{ key: "value" }];
  render(
    <Router>
      <DataTable data={data} path="/" pathParam="id" />
    </Router>
  );
});

test("it should render active and inactive rows when provided with appropriate props", () => {
  const data = [
    { key: "value", active: 1 },
    { key: "value", active: 0 },
  ];
  render(
    <Router>
      <DataTable
        data={data}
        path="/"
        pathParam="id"
        activeKey="active"
        activeValue={1}
      />
    </Router>
  );
});

test("it should perform an API call if provided a remote path", async () => {
  const data = [{ key: "value" }];
  const promise = Promise.resolve({
    data,
  });
  util.apiCall = jest.fn(() => promise);
  await act(async () => {
    render(<DataTable remote={"/"} remoteKey="key" />);
  });
});
