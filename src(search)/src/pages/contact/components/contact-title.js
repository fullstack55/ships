import React from 'react';
import PropTypes from 'prop-types';
import './contact-title.sass';

const ContactTitle = ({
  icon,
  primaryText,
  secondaryText,
  footer
}) => (
  <div className="contact-title">
    <div className="image-wrapper">
      <img src={ icon } className="image" />
    </div>
    <div className="primary-text">
      <span className="first-word">
        { primaryText.split(' ')[0] }
        &nbsp;
      </span>
      <span className="last-word">
      {  primaryText.split(' ')[1] }
      </span>
    </div>
    <div className="secondary-text">
      { secondaryText }
    </div>
    <div className="bottom-text">
      { footer }
    </div>
  </div>
)

ContactTitle.propTypes = {
  footer: PropTypes.string,
  icon: PropTypes.string,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string
};

export default ContactTitle;