import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiCall, makeLabel } from "../util";

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
  }, [props, tableData]);

  function checkActiveClass(item, activeKey, activeValue) {
    if (activeKey && item[activeKey] !== activeValue) {
      return "data__table__row data__table__row--inactive";
    } else {
      return "data__table__row";
    }
  }

  // renders active values to yes/no instead of 0 or 1.
  function renderValue(key, value, activeKey, activeValue) {
    if (activeKey && key === activeKey) {
      return value === activeValue ? "Yes" : "No";
    } else {
      return value;
    }
  }

  // renders cell value
  function renderCell(item, key, value, path, param, activeKey, activeValue) {
    const renderedValue = renderValue(key, value, activeKey, activeValue);
    if (path) {
      return (
        <Link className="table__cell__link" to={`${props.path}/${item[param]}`}>
          {renderedValue}
        </Link>
      );
    } else {
      return renderedValue;
    }
  }

  function getTable(data) {
    if (loading) {
      return (
        <span className="data__table__message">{props.loadingMessage}</span>
      );
    } else if (!data) {
      return <span className="data__table__message">{props.errorMessage}</span>;
    } else if (data.length === 0) {
      return <span className="data__table__message">{props.emptyMessage}</span>;
    } else {
      return (
        <table className="data__table">
          <thead>
            <tr>
              {Object.keys(data[0]).map((itemKey, i) => {
                return (
                  <th key={`${props.title}-${itemKey}-${i}`}>
                    {makeLabel(itemKey)}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr
                  key={`${props.title}-${item.toString()}-${i}`}
                  className={checkActiveClass(
                    item,
                    props.activeKey,
                    props.activeValue
                  )}
                >
                  {Object.keys(item).map((itemKey, i) => {
                    return (
                      <td key={`${props.title}-${item[itemKey]}-${i}`}>
                        {renderCell(
                          item,
                          itemKey,
                          item[itemKey],
                          props.path,
                          props.pathParam,
                          props.activeKey,
                          props.activeValue
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
    <div className="data__table__container">
      <span className="data__table__title title">{props.title}</span>
      <div
        className={
          loading || (tableData && tableData.length === 0)
            ? "data__table__wrapper data__table__wrapper--empty"
            : "data__table__wrapper"
        }
      >
        {getTable(tableData)}
      </div>
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
  activeKey: null,
  activeValue: 1,
  inactiveValue: 0,
};
