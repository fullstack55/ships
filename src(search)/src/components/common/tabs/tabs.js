import PropTypes from "prop-types";
import React from 'react';
import classnames from 'classnames';
import './tabs.sass';

const Tabs = ({ activeTab, tabs, onChange }) => (
  <div className="tabs-container">
    { tabs.map(({ key, label }, index) => (
      <>
        <span
          className={ classnames('tabs-container-tab', { 'active': key === activeTab }) }
          onClick={ () => onChange(key) }
        >
          { label }
        </span>
        { index !== tabs.length - 1 &&
          <span>
            &bull;
          </span>
        }
      </>
    )) }
  </div>
)

Tabs.propTypes = {
  activeTab: PropTypes.string,
  onChange: PropTypes.func,
  tabs: PropTypes.array,
}

export default Tabs;