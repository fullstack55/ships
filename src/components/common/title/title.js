import PropTypes from "prop-types";
import React from 'react';
import './title.sass';

const Title = ({ boldText, regularText, addon, style }) => (
  <div className="page-title" style={ style }>
    { boldText &&
      <span className="bold">
        { boldText }
        &nbsp;
      </span> 
    }
    {<br />}
    { regularText &&
       <span className="regular">
        { regularText }
      </span>
    }
    { addon &&
      <span className="additional">
        { addon }
      </span>
    }
  </div>
)

Title.propTypes = {
  boldText: PropTypes.string,
  style: PropTypes.object,
  regularText: PropTypes.string,
  addon: PropTypes.node,
}

export default Title;