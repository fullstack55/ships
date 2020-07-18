import React from "react";
import "../content.sass";
import "./news.sass";
import Topic from "../../../common/topic/topic";
import SectionTitle from "../../../common/section-title/section-title";

const News = () => {
  return (
    <div>
      <SectionTitle
        title={"Latest news"}
        className={"section__title-news-margin"}
      />
      <Topic
        title={
          "Pioneering Norwegian Autonomous Ship Project Receives\n" +
          "          Nok 200"
        }
        time={"4d 19h ago"}
      />
      <Topic
        title={"Pirates Fire Upon Boxship off Nigeria"}
        time={"4d 19h ago"}
      />
      <Topic
        title={
          "Study: New Blends of Marine Fuels Have Higher BC Emissions than"
        }
        time={"6d 18h ago"}
      />
      <Topic
        title={"Hapag-Lloyd Buys Slot Capacity from 2M"}
        time={"6d 18h ago"}
      />
      <Topic
        title={"Shipping to splash out on ammonia in green bi"}
        time={"10d 17h ago"}
      />
      <div className="link-container">
        <div>
          <a href="#" className="link link__1">
            {" "}
            More News
          </a>
        </div>
        <div>
          <a href="#" className="link">
            {" "}
            Most read last week
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
