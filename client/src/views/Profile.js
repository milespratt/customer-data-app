import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import DataTable from "../components/DataTable";
import CustomerProfile from "../components/CustomerProfile";

function Profile(props) {
  const { customerID } = props.match.params;
  const [customerDetails, setCustomerDetails] = useState(null);
  useEffect(() => {
    if (!customerDetails) {
      fetch(`/api/customers/${customerID}`)
        .then((res) => res.json())
        .then((jsonRes) => {
          setCustomerDetails(jsonRes.customer);
        });
    }
  }, []);
  return (
    <div>
      <CustomerProfile data={customerDetails} />
      <DataTable
        emptyMessage="Customer Has No Accounts"
        errorMessage="Could Not Load Customer Accounts"
        loadingMessage="Loading Customer Accounts..."
        remote={`/api/accounts/customer/${customerID}`}
        remoteKey={"customerAccounts"}
        title="Customer Accounts"
      />
    </div>
  );
}

export default withRouter(Profile);
