import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import DataTable from "../components/DataTable";
import CustomerProfile from "../components/CustomerProfile";
import { endpoints, apiDataKeys } from "../constants";
import { apiCall } from "../util";

function Profile(props) {
  const { customerID } = props.match.params;
  const [customerDetails, setCustomerDetails] = useState(null);
  useEffect(() => {
    apiCall(`${endpoints.customers}/${customerID}`).then((data) => {
      setCustomerDetails(data[apiDataKeys.customer]);
    });
  }, []);
  return (
    <div>
      <CustomerProfile data={customerDetails} />
      <DataTable
        emptyMessage="Customer Has No Accounts"
        errorMessage="Could Not Load Customer Accounts"
        loadingMessage="Loading Customer Accounts..."
        remote={`${endpoints.customerAccounts}/${customerID}`}
        remoteKey={apiDataKeys.customerAccounts}
        title="Customer Accounts"
      />
    </div>
  );
}

export default withRouter(Profile);
