import React from "react";

const FilterItem = props => (
  <li className="flex items-center justify-center mx-2">
    <button onClick={props.handleClick}>
      <span className={`inline-block w-4 h-4 bg-${props.color}`} />
      <span className="inline-block ml-1">{props.name}</span>
    </button>
  </li>
);

export default FilterItem;
