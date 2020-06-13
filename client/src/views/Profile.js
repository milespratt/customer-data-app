import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import DataTable from "../components/DataTable";
import ObjectProfile from "../components/ObjectProfile";
import { endpoints, apiDataKeys } from "../constants";
import { apiCall } from "../util";

function Profile(props) {
  const { customerID } = props.match.params;
  const [customerDetails, setCustomerDetails] = useState(null);
  useEffect(() => {
    apiCall(`${endpoints.customers}/${customerID}`).then((data) => {
      setCustomerDetails(data[apiDataKeys.customer]);
    });
  }, [customerID]);
  return (
    <div className="profile">
      <div className="profile__header">
        <Link className="profile__nav__item" to="/">
          <i className="fas fa-arrow-circle-left profile__nav__item__icon"></i>
          <span className="profile__nav__item__label">Go Back</span>
        </Link>
      </div>
      <ObjectProfile
        data={customerDetails}
        title="Customer Profile"
        activeKey="active"
        activeValue={1}
      />
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
