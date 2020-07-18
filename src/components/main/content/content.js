import React from "react";
import "./content.sass";
import Topics from "./topics/topics";
import News from "./news/news";
import Categories from "./categories/categories";
import Photographers from "./photographers/photographers";

const Content = () => {
  return (
    <div className="main__content">
      <div className="container1">
        <div className="main__content-wrapper">
          <div className="main__content-top-panel">
            <div className="main__content-left-panel">
              <Topics />
              <News />
            </div>
            <Categories />
          </div>
          <Photographers />
        </div>
      </div>
    </div>
  );
};
export default Content;
