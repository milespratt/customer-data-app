import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { apiCall } from "../util";

export default function Home() {
  return (
    <div className="home">
      <DataTable
        emptyMessage="No Customers Found"
        errorMessage="Could Not Load Customers"
        loadingMessage="Loading Customer Records..."
        path={"/customer"}
        pathParam={"id"}
        remote={"/api/customers"}
        remoteKey={"customers"}
        title={"Customers"}
      />
      <DataTable
        emptyMessage="No Accounts Found"
        errorMessage="Could Not Load Accounts"
        loadingMessage="Loading Account Records..."
        remote={"/api/accounts"}
        remoteKey={"accounts"}
        title={"Accounts"}
      />
    </div>
  );
}
