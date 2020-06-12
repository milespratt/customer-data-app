import React from "react";

export default function CustomerProfile(props) {
  const { data } = props;
  return (
    <div>
      Customer Details
      {data &&
        Object.keys(data).map((dataKey) => {
          return <p key={dataKey}>{`${dataKey}: ${data[dataKey]}`}</p>;
        })}
    </div>
  );
}

CustomerProfile.defaultProps = {
  data: { key: "value" },
};
