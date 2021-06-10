import React from "react";
import "./Filter.scss";

export default function Filter(props) {
  const { title, selectedIndex, filters } = props;
  return (
    <div className="xt-filter">
      <h4 className="xt-filter-title">{title}</h4>
      <ul className="xt-filter-list">
        {filters.map((filter, index) => (
          <li
            className={selectedIndex === index ? "selected" : ""}
            key={index}
            onClick={() =>
              props.updateSelectedFilter(
                selectedIndex === index ? false : index // unselect by passing false if aready selected
              )
            }
          >
            {filter}
          </li>
        ))}
      </ul>
    </div>
  );
}
