import React from "react";
import { PropTypes } from "prop-types";

import "./shipItem.sass";

import like from "../../../../assets/images/desktop/most-popular/like.svg";

import Button from "../../../../components/common/button/button";

const ShipItem = ({ url, firstTitle, secondTitle, thirdTitle, withLike }) => {
  return (
    <div className="shipindex__ship-item">
      <img src={url} alt="icon" className="shipindex__ship-item__bg-image" />
      <div className="shipindex__ship-item__more-detail">
        <p>
          <span> {firstTitle}</span>
        </p>
        <p>
          <span> {secondTitle}</span>
        </p>
        <p>
          <span> {thirdTitle}</span>
        </p>
        <Button>View ship details</Button>
        {withLike ? (
          <div className="like">
            <img src={like} alt="like" /> 10
          </div>
        ) : null}
      </div>
    </div>
  );
};

ShipItem.propTypes = {
  url: PropTypes.string,
  firstTitle: PropTypes.string,
  secondTitle: PropTypes.string,
  thirdTitle: PropTypes.string,
  withLike: PropTypes.bool,
};

export default ShipItem;
