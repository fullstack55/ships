import Header from "../../components/header/header";
import Footer from "../../components/common/footer/footer";
import Pagination from "./pagination";
import React from "react";
import "./news.sass";

const NewsTabs = () => (
  <div className="news-tabs-container">
    <span className="news-tabs-container-tab active">Latest News</span>
    <span>&bull;</span>
    <span className="news-tabs-container-tab">Most Read News</span>
  </div>
);

const NewsTitle = () => (
  <div className="news-title">
    <span className="news-title latest">LATEST&nbsp;</span>
    <span className="news-title shipping">SHIPPING INDUSTRY NEWS</span>
  </div>
);

const NewsSearch = () => (
  <div className="news-search">
    <span className="news-search-label">Quick search:&nbsp;</span>
    <input value="Accomodation" className="news-search-input" />
    <span className="news-search-clear">Clear</span>
  </div>
);

const NewsCard = () => (
  <div className="news-cards-container-card">
    <div className="news-cards-container-card-header">
      <div className="news-cards-container-card-header-meta">
        <span>Added: Feb 26, 2020 21:33</span>
        <span>&bull;</span>
        <span>12 hours 13 minutes ago</span>
      </div>
      <div className="news-cards-container-card-header-title">
        Passengers disembark coronavirus hit cruise liner with four Irish on
        board
      </div>
    </div>
    <div className="news-cards-container-card-main">
      <div className="news-cards-container-card-main-text">
        The first 500 passengers on the coronavirus hit Diamond Princess cruise
        liner, which has four Irish on board, are...
      </div>
      <div className="news-cards-container-card-main-more">
        <span>&#91;&nbsp;</span>
        <span>Read More</span>
        <span>&nbsp;&#93;</span>
      </div>
    </div>
    <div className="news-cards-container-card-footer">
      <span>Source: Maritime Connector</span>
      <span>&#9888; &nbsp;</span>
      <span>Report To Admin</span>
    </div>
  </div>
);

const NewsPage = () => (
  <>
    <Header info={false} />
    <NewsTabs />
    <NewsTitle />
    <NewsSearch />
    <Pagination totalPages={11797} currentPage={2} />
    <div className="container1">
      <div className="news-cards-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <NewsCard key={index} />
        ))}
      </div>
    </div>
    <Pagination totalPages={11797} currentPage={2} />
    <Footer />
  </>
);

export default NewsPage;
