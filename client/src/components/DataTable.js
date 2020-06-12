import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiCall } from "../util";

export default function DataTable(props) {
  const [tableData, setTableData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (props.remote && !tableData) {
      apiCall(props.remote).then((data) => {
        setTableData(data[props.remoteKey]);
        setLoading(false);
      });
    }
    if (props.data) {
      setTableData(props.data);
      setLoading(false);
    }
  }, [props]);

  function getTable(data) {
    if (loading) {
      return props.loadingMessage;
    } else if (!data) {
      return props.errorMessage;
    } else if (data.length === 0) {
      return props.emptyMessage;
    } else {
      return (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((itemKey, i) => {
                return (
                  <th key={`${props.title}-${itemKey}-${i}`}>{itemKey}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr key={`${props.title}-${item.toString()}-${i}`}>
                  {Object.keys(item).map((itemKey, i) => {
                    return (
                      <td key={`${props.title}-${item[itemKey]}-${i}`}>
                        {props.path ? (
                          <Link to={`${props.path}/${item[props.pathParam]}`}>
                            {item[itemKey]}
                          </Link>
                        ) : (
                          item[itemKey]
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  }
  return (
    <div className="data__table__wrapper">
      <span className="data__table__title">{props.title}</span>
      <div className="data__table">{getTable(tableData)}</div>
    </div>
  );
}

DataTable.defaultProps = {
  data: null,
  loadingMessage: "Loading Data...",
  emptyMessage: "No Data",
  errorMessage: "Error Loading Data",
  path: null,
  pathParam: null,
  remote: null,
  title: "Data Table",
};
