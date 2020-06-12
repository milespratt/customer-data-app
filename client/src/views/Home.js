import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { endpoints, paths, apiDataKeys, params } from "../constants";

export default function Home() {
  return (
    <div className="home">
      <DataTable
        emptyMessage="No Customers Found"
        errorMessage="Could Not Load Customers"
        loadingMessage="Loading Customer Records..."
        path={paths.customer}
        pathParam={params.customer}
        remote={endpoints.customers}
        remoteKey={apiDataKeys.customers}
        title={"Customers"}
      />
      <DataTable
        emptyMessage="No Accounts Found"
        errorMessage="Could Not Load Accounts"
        loadingMessage="Loading Account Records..."
        remote={endpoints.accounts}
        remoteKey={apiDataKeys.accounts}
        title="Accounts"
      />
    </div>
  );
}
