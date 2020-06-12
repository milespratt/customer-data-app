import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import DataTable from "../components/DataTable";
import CustomerProfile from "../components/CustomerProfile";

function Profile(props) {
  const { customerID } = props.match.params;
  const [customerDetails, setCustomerDetails] = useState(null);
  const [customerAccounts, setCustomerAccounts] = useState(null);
  useEffect(() => {
    if (!customerDetails) {
      fetch(`/api/customers/${customerID}`)
        .then((res) => res.json())
        .then((jsonRes) => {
          setCustomerDetails(jsonRes.customer);
        });
    }
    if (!customerAccounts) {
      fetch(`/api/accounts/customer/${customerID}`)
        .then((res) => res.json())
        .then((jsonRes) => {
          setCustomerAccounts(jsonRes.customerAccounts);
        });
    }
  }, []);
  return (
    <div>
      <CustomerProfile data={customerDetails} />
      <DataTable title="Customer Accounts" data={customerAccounts} />
    </div>
  );
}

export default withRouter(Profile);