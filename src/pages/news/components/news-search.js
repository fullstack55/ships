import React from 'react';
import './news-search.sass';

const NewsSearch = () => (
  <div className="news-search">
    <span className="news-search-label">
      Quick search:&nbsp;
    </span>
    <input
      value="Accomodation"
      className="news-search-input"
    />
    <span className="news-search-clear">
      Clear
    </span>
  </div>
)

export default NewsSearch;