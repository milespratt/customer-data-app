import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";

export default function Home() {
  const [customerList, setCustomerList] = useState(null);
  const [accountList, setAccountList] = useState(null);
  useEffect(() => {
    if (!customerList) {
      fetch("/api/customers")
        .then((res) => res.json())
        .then((jsonRes) => {
          console.log(jsonRes);
          setCustomerList(jsonRes.customers);
        });
    }
    if (!accountList) {
      fetch("/api/accounts")
        .then((res) => res.json())
        .then((jsonRes) => {
          console.log(jsonRes);
          setAccountList(jsonRes.accounts);
        });
    }
  }, []);
  return (
    <div className="home">
      <DataTable
        title={"customers"}
        data={customerList}
        path={"/customer"}
        pathParam={"id"}
      />
      <DataTable title={"accounts"} data={accountList} />
    </div>
  );
}
