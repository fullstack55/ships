import React from 'react';
import PropTypes from 'prop-types';
import './card.sass';

const Card = ({ icon, titleBold, titleRegular, children }) => (
  <div className="shiptrax-card">
    <div className="shiptrax-card-icon">
      <img src={ icon } />
    </div>
    <div className="shiptrax-card-title">
      <strong>{ titleBold }</strong>
      <span>&nbsp;</span>
      <span>{ titleRegular }</span>
    </div>
    <div className="shiptrax-card-content">
      { children }
    </div>
  </div>
)

Card.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  titleBold: PropTypes.string,
  titleRegular: PropTypes.string
};

export default Card;