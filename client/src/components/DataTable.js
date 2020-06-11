import React from "react";
import { Link } from "react-router-dom";

export default function DataTable(props) {
  return (
    <table>
      <thead>
        <tr>
          {props.data &&
            props.data.length > 0 &&
            Object.keys(props.data[0]).map((itemKey, i) => {
              return <th key={`${props.title}-${itemKey}-${i}`}>{itemKey}</th>;
            })}
        </tr>
      </thead>
      <tbody>
        {props.data &&
          props.data.length > 0 &&
          props.data.map((item, i) => {
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

DataTable.defaultProps = {
  data: [],
  path: null,
  pathParam: null,
  title: "Data Table",
};
