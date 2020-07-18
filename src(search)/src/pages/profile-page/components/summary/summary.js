import React from "react";
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import InformationItem from "../../../../components/common/information-item/information-item";
import CardItem from "../../../../components/common/card-item/card-item";
import photosIcon from "../../../../assets/images/desktop/summary/photosIcon.png";
import postsIcon from "../../../../assets/images/desktop/summary/postsIcon.png";
import activeIcon from "../../../../assets/images/desktop/summary/activeIcon.png";
import registerIcon from "../../../../assets/images/desktop/summary/registerIcon.png";
import "./summary.sass";

const Summary = () => (
  <div className="summary">
    <Typography firstText="Summary" secondText="profile info" />
    <Paper className="summary__greeting" type="secondary">
      <div className="summary__greeting-welcome">Welcome back</div>
      <div className="summary__greeting-name">
        José Ricardo Rodriguez Montero
      </div>
      <div className="summary__greeting-faq">FAQ Administrator</div>
    </Paper>
    <div className="summary__cards">
      <CardItem
        value="5 615"
        label={"Ship photos"}
        alt="photos"
        imgSrc={photosIcon}
        classes={{
          rootCls: "summary__card",
          imgCls: "summary__card-img",
          topTextCls: "summary__card-value",
          labelCls: "summary__card-label",
        }}
      />
      <CardItem
        value="2,501 (0.548 per day)"
        label="Posts"
        alt="posts"
        imgSrc={postsIcon}
        classes={{
          rootCls: "summary__card",
          imgCls: "summary__card-img",
          topTextCls: "summary__card-value",
          labelCls: "summary__card-label",
        }}
      />
      <CardItem
        value="August 06, 2019"
        label="Last Active"
        alt="activity"
        imgSrc={activeIcon}
        withClock={true}
        classes={{
          rootCls: "summary__card",
          imgCls: "summary__card-img",
          topTextCls: "summary__card-value",
          labelCls: "summary__card-label",
        }}
      />
      <CardItem
        value="June 16, 2004"
        label="Date Registered"
        alt="registry"
        imgSrc={registerIcon}
        withClock={true}
        classes={{
          rootCls: "summary__card",
          imgCls: "summary__card-img",
          topTextCls: "summary__card-value",
          labelCls: "summary__card-label",
        }}
      />
    </div>
    <div className="summary__papers">
      <Paper className="summary__paper summary__papers_child">
        <Typography
          className="summary__text_s"
          firstText="Contact"
          secondText="information"
          before={true}
        />
        <InformationItem title="ICQ" value="2358900" />
        <InformationItem title="AIM" value="Text" />
        <InformationItem title="MSN" value="Another text" />
        <InformationItem title="YIM" value="Text" />
        <InformationItem title="Email" value="buildmypoint@gmail.com" />
        <InformationItem title="Website" value="Shipsunderway.co.uk" />
      </Paper>
      <Paper className="summary__paper summary__papers_child">
        <Typography
          className="summary__text_s"
          firstText="General"
          secondText="information"
          before={true}
        />
        <InformationItem title="Gender" value="Male" />
        <InformationItem value="N/A" title="Age" />
        <InformationItem title="Location" value="2358900" />
        <InformationItem
          title="Local time"
          value="February 19, 2020, 03:47:45 pm"
        />
        <InformationItem title="Language" value="-" />
      </Paper>
    </div>
    <Paper className="summary__paper summary__paper_2">
      <Typography
        className="summary__text_s summary__paper_2_title"
        firstText={"Signature"}
        before={true}
      />
      <div>
        <span className="summary__paper_2-text">
          {" "}
          To view some of the shipspotting sites I use, see the listing at{" "}
        </span>
        <a
          className="summary__link"
          href="http://www.shipspotting.com/modules/myalbum/photo.php?lid=510326."
        >
          http://www.shipspotting.com/modules/myalbum/photo.php?lid=510326.
        </a>
      </div>
    </Paper>
  </div>
);

export default Summary;
