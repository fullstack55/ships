import React from "react";

import star from "../../../../assets/images/desktop/star.png";

import "./TopicCardHeader.sass";

const TopicCardHeader = ({ picture, date, stars }) => {
  const _renderStars = () => {
    let starsBox = [];
    for (let i = 0; i < stars; i++) {
      starsBox.push(<img src={star} alt="star" className="pt-1 ml-2" />);
    }
    return starsBox;
  };

  return (
    <div className="TopicCardHeader d-flex align-items-start">
      <div className="TopicCardHeader__person">
        <img src={picture} alt={picture} />
      </div>
      <div className="ml-3">
        <div className="d-flex justify-content-start align-items-center">
          <h6 className="TopicCardHeader__name mt-2">build</h6>
          {_renderStars()}
        </div>
        <h6 className="TopicCardHeader__date mt-2">{date}</h6>
      </div>
    </div>
  );
};

export default TopicCardHeader;
