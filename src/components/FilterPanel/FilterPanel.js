import React from "react";
import Filter from "../Filter/Filter";
import "./FilterPanel.scss";

export default function FilterPanel(props) {
  const { filters, updateSelectedFilter } = props;
  return (
    <aside className="xt-filters">
      <div className="xt-filters-heading">Filters</div>
      {filters.map((filter, filterIndex) => (
        <Filter
          key={filterIndex}
          {...filter}
          updateSelectedFilter={(selectedIndex) =>
            updateSelectedFilter(
              filterIndex, // filter index,
              selectedIndex // select value index
            )
          }
        />
      ))}
    </aside>
  );
}
