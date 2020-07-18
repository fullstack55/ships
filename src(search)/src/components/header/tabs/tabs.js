import React, { useState } from "react";
import PropTypes from "prop-types";
import "./tabs.sass";

const Tabs = ({ render }) => {
  const [tab, setTab] = useState(0);

  return (
    <React.Fragment>
      <ul className="tabs">
        <li
          className={`tab ${tab === 0 ? "tab_selected" : ""}`}
          onClick={() => setTab(0)}
        >
          Upload Photo
        </li>
        <li
          className={`tab ${tab === 1 ? "tab_selected" : ""}`}
          onClick={() => setTab(1)}
        >
          Search
        </li>
      </ul>
      {render(tab)}
    </React.Fragment>
  );
};

Tabs.propTypes = {
  render: PropTypes.func,
};
export default Tabs;
