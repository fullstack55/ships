import React from 'react';
import PropTypes from 'prop-types';
import Typography from "../../../components/common/typography/typography";
import './blue-card.sass';

const BlueCard = ({ boldTitle, regularTitle, children }) => (
  <div className="blue-card">
    <div className="blue-card-header">
      <Typography
        firstText={ boldTitle }
        secondText={ regularTitle }
        before
        className="blue-card-header-typography"
      />
    </div>
    <div className="blue-card-container">
      { children }
    </div>
  </div>
)

BlueCard.propTypes = {
  boldTitle: PropTypes.string,
  regularTitle: PropTypes.string,
  children: PropTypes.node,
};

export default BlueCard;