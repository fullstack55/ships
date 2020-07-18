import React from "react";
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import InformationItem from "../../../../components/common/information-item/information-item";
import StatisticsImage from "./statistics-image/statistics-image";
import firstShip from "../../../../assets/images/desktop/statistics/firstShip.png";
import secondShip from "../../../../assets/images/desktop/statistics/secondShip.png";
import thirdShip from "../../../../assets/images/desktop/statistics/thirdShip.png";
import fourthShip from "../../../../assets/images/desktop/statistics/fourthShip.png";
import fifthShip from "../../../../assets/images/desktop/statistics/fifthShip.png";
import likeIcon from "../../../../assets/images/desktop/statistics/likeIcon.png";
import logoIcon from "../../../../assets/images/desktop/statistics/logoIcon.png";
import shapeLine from "../../../../assets/images/desktop/statistics/shapeLine.svg";
import shape from "../../../../assets/images/desktop/statistics/shape.svg";
import line from "../../../../assets/images/desktop/statistics/line.png";
import "./statistics.sass";

const Statistics = () => (
  <div className="statistics">
    <Typography firstText="My" secondText="statistics" />
    <div className="statistics__container_top">
      <div className="statistics__container_left">
        <Paper className="statistics__paper">
          <Typography
            firstText={"General"}
            secondText={"statistics"}
            className="statistics__link"
            before={true}
          />
          <InformationItem
            title="Total Time Spent Online:"
            value="7 hours and 1 minutes"
          />
          <InformationItem title="Total Posts:" value="200" />
          <InformationItem title="Total Topics Started:" value="18" />
          <InformationItem title="Polls Created:" value="0" />
          <InformationItem title="Votes Cast:" value="0" />
          <InformationItem title="Change requests:" value="12" />
          <InformationItem title="Change approved:" value="7" />
          <InformationItem title="Photo's uploaded:" value="5 615" />
          <InformationItem title="Likes on my photos:" value="1 243" />
          <InformationItem title="Favourites on my photos:" value="569" />
          <InformationItem title="Comments:" value="11 568" />
        </Paper>
        <Paper className="statistics__paper">
          <Typography
            firstText={"Most liked"}
            secondText={"photo"}
            className="statistics__link"
            before={true}
          />
          <StatisticsImage
            imgSrc={firstShip}
            alt={"ship"}
            likesNumber={"10 256"}
            tooltipSrc={likeIcon}
          />
          <StatisticsImage
            imgSrc={secondShip}
            alt={"ship"}
            likesNumber={"9 142"}
            tooltipSrc={likeIcon}
          />
          <StatisticsImage
            imgSrc={thirdShip}
            alt={"ship"}
            likesNumber={"9 100"}
            tooltipSrc={likeIcon}
          />
          <StatisticsImage
            imgSrc={fourthShip}
            alt={"ship"}
            likesNumber={"8 451"}
            tooltipSrc={likeIcon}
          />
          <StatisticsImage
            imgSrc={fifthShip}
            alt={"ship"}
            likesNumber={"8 201"}
            tooltipSrc={likeIcon}
          />
          <StatisticsImage imgSrc={logoIcon} alt={"ship"} />
        </Paper>
      </div>
      <div>
        <Paper className="statistics__paper">
          <Typography
            firstText={"Most Popular Boards"}
            secondText={"By Posts"}
            className="statistics__link"
            before={true}
          />
          <InformationItem title="Shipping News and information" value="122" />
          <InformationItem title="Help and Advice" value="63" />
          <InformationItem
            title="Site related news, functions and modules"
            value="61"
          />
          <InformationItem title="Trip reports" value="20" />
        </Paper>
        <Paper className="statistics__paper">
          <Typography
            firstText={"Most Popular Boards"}
            secondText={"By Activity"}
            className="statistics__link"
            before={true}
          />
          <InformationItem
            title="Shipping News and information"
            value="1.8274%"
          />
          <InformationItem title="Help and Advice" value="1.5571%" />
          <InformationItem
            title="Site related news, functions and modules"
            value="0.9775%"
          />
          <InformationItem title="Trip reports" value="0.9346%" />
        </Paper>
        <Paper className="statistics__paper">
          <Typography
            firstText={"Most favourited"}
            secondText={"photo"}
            className="statistics__link"
            before={true}
          />
          <StatisticsImage
            imgSrc={firstShip}
            alt={"ship"}
            likesNumber={"10 256"}
            tooltipSrc={likeIcon}
          />
          <StatisticsImage
            imgSrc={secondShip}
            alt={"ship"}
            likesNumber={"9 142"}
            tooltipSrc={likeIcon}
          />
          <StatisticsImage
            imgSrc={thirdShip}
            alt={"ship"}
            likesNumber={"9 100"}
            tooltipSrc={likeIcon}
          />
          <StatisticsImage
            imgSrc={fourthShip}
            alt={"ship"}
            likesNumber={"8 451"}
            tooltipSrc={likeIcon}
          />
          <StatisticsImage
            imgSrc={fifthShip}
            alt={"ship"}
            likesNumber={"8 201"}
            tooltipSrc={likeIcon}
          />
          <StatisticsImage imgSrc={logoIcon} alt={"ship"} />
        </Paper>
      </div>
    </div>
    <Paper className="statistics__paper statistics__paper-bottom">
      <Typography
        firstText={"Posting Activity"}
        secondText={"By Time"}
        className="statistics__link statistics__paper-bottom_link"
        before={true}
      />
      <div className="statistics__paper-bottom_text">Time of Day</div>
      <div className="statistics__activity">
        <img className="statistics__paper-bottom_line" src={shapeLine} />
        <img src={shape} />
        <img className="statistics__paper-bottom_line_bottom" src={line} />
      </div>
    </Paper>
  </div>
);

export default Statistics;
