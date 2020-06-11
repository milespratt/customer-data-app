import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import DataTable from "../components/DataTable";

function Profile(props) {
  const { customerID } = props.match.params;
  const [customerDetails, setCustomerDetails] = useState(null);
  const [customerAccounts, setCustomerAccounts] = useState(null);
  useEffect(() => {
    if (!customerDetails) {
      fetch(`/api/customers/${customerID}`)
        .then((res) => res.json())
        .then((jsonRes) => {
          console.log(jsonRes);
          setCustomerDetails(jsonRes.customer);
        });
    }
    if (!customerAccounts) {
      fetch(`/api/accounts/customer/${customerID}`)
        .then((res) => res.json())
        .then((jsonRes) => {
          console.log(jsonRes);
          setCustomerAccounts(jsonRes.customerAccounts);
        });
    }
  }, []);
  return (
    <div>
      {/* <DataTable data={customerDetails} /> */}
      <DataTable data={customerAccounts} />
    </div>
  );
}

export default withRouter(Profile);
