import React from 'react';
import './news-card.sass';

const NewsCard = () => (
  <div className="news-cards-container-card">
    <div className="news-cards-container-card-header">
      <div className="news-cards-container-card-header-meta">
        <span>
          Added: Feb 26, 2020 21:33
        </span>
        <span>
          &bull;
        </span>
        <span>
          12 hours 13 minutes ago
        </span>
      </div>
      <div className="news-cards-container-card-header-title">
        Passengers disembark coronavirus hit cruise liner with four Irish on board
      </div>
    </div>
    <div className="news-cards-container-card-main">
      <div className="news-cards-container-card-main-text">
        The first 500 passengers on the coronavirus hit Diamond Princess cruise liner, which has four Irish on board, are...
      </div>
      <div className="news-cards-container-card-main-more">
        <span>
          &#91;&nbsp;
        </span>
        <span>
          Read More
        </span>
        <span>
          &nbsp;&#93;
        </span>
      </div>
    </div>
    <div className="news-cards-container-card-footer">
      <span>
        Source: Maritime Connector
      </span>
      <span>
        &#9888;
        &nbsp;
      </span>
      <span>
        Report To Admin
      </span>
    </div>
  </div>
)

export default NewsCard;