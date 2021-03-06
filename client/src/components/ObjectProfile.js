import React from "react";
import { makeLabel, renderValue } from "../util";

export default function ObjectProfile(props) {
  return (
    <div className="object__profile">
      <span className="profile__title title">{props.title}</span>
      <div className="profile__table">
        {props.data &&
          Object.keys(props.data).map((dataKey) => {
            return (
              <div key={dataKey} className="profile__table__row">
                <div className="profile__table__cell profile__table__label">
                  {`${makeLabel(dataKey)}:`}
                </div>
                <div className="profile__table__cell profile__table__value">
                  {renderValue(
                    dataKey,
                    props.data[dataKey],
                    props.activeKey,
                    props.activeValue
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

ObjectProfile.defaultProps = {
  activeKey: "active",
  activeValue: 1,
  data: { key: "value" },
  title: "Object Profile",
};
