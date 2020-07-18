import React from "react";
import "../content.sass";
import "./topics.sass";
import Topic from "../../../common/topic/topic";
import SectionTitle from "../../../common/section-title/section-title";

const Topics = () => {
  return (
    <div>
      <SectionTitle title={"Forum topics"} />
      <div className="subtitle-section">
        <div>Topic Last</div>
        <div className="subtitle-section__active">Last active</div>
      </div>
      <Topic
        title={
          "Latest Ultra Large Container Ship from MSC - MSC Febe, maiden call"
        }
        time={"59 minutes ago"}
      />
      <Topic
        title={"Updates on vessels and service changes to New Zealand in 2019"}
        time={"1 day ago"}
      />
      <Topic title={"Renamings"} time={"1 day ago"} />
      <Topic
        title={"Updates on vessels and service changes to New Zealand in 2019"}
        time={"1 day ago"}
      />

      <div className="link-container-margin">
        <a href="#" className="link">
          {" "}
          Visit Forum
        </a>
      </div>
    </div>
  );
};

export default Topics;
