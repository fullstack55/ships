import React from "react";
import { Row, Col, Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import { useMediaQuery } from "react-responsive";
import TopicCardHeader from "../TopicCardHeader";
import TopicBody from "../TopicBody";
import FooterItem from "../FooterItem";
import topic1 from "../../../../assets/images/desktop/topic1.png";
import topic2 from "../../../../assets/images/desktop/topic2.png";
import topic3 from "../../../../assets/images/desktop/topic3.png";
import topic4 from "../../../../assets/images/desktop/topic4.png";
import topic5 from "../../../../assets/images/desktop/topic5.png";
import "./TopicCard.sass";

const TabletAndDesktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 591 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 321, maxWidth: 590 });
  return isDesktop ? children : null;
};

const TinyMobile = ({ children }) => {
  const isDesktop = useMediaQuery({ maxWidth: 320 });
  return isDesktop ? children : null;
};
const TopicCard = ({
  picture,
  name,
  stars,
  date,
  contentHeader,
  createdDate,
  content,
  quote,
}) => {
  return (
    <div className="TopicCard mt-4 mx-2 mx-lg-0">
      <Card>
        <CardHeader>
          <TopicCardHeader
            picture={picture}
            name={name}
            stars={stars}
            date={date}
          />
        </CardHeader>
        <CardBody>
          <TopicBody
            contentHeader={contentHeader}
            createdDate={createdDate}
            content={content}
            quote={quote}
          />
        </CardBody>
        <CardFooter>
          <TabletAndDesktop>
            <Row>
              <Col
                lg={6}
                className="d-flex justify-content-start align-items-center"
              >
                <FooterItem
                  icon={<img src={topic1} alt="topic1" />}
                  name="Send Message"
                />
                <FooterItem
                  icon={<img src={topic2} alt="topic2" />}
                  name="View Profile"
                />
              </Col>
              <Col
                lg={6}
                className="d-flex justify-content-end align-items-center"
              >
                <FooterItem
                  icon={<img src={topic3} alt="topic3" />}
                  name="Quote"
                />
                <FooterItem
                  icon={<img src={topic4} alt="topic4" />}
                  name="Report to moderator"
                />
                <FooterItem
                  icon={<img src={topic5} alt="topic5" />}
                  name="Logged"
                />
              </Col>
            </Row>
          </TabletAndDesktop>
          <Mobile>
            <div className="d-flex justify-content-between">
              <FooterItem
                icon={<img src={topic1} alt="topic1" />}
                name="Send Message"
              />
              <FooterItem
                icon={<img src={topic2} alt="topic2" />}
                name="View Profile"
              />
              <FooterItem
                icon={<img src={topic3} alt="topic3" />}
                name="Quote"
              />
              <FooterItem
                icon={<img src={topic4} alt="topic4" />}
                name="Report to moderator"
              />
              <FooterItem
                icon={<img src={topic5} alt="topic5" />}
                name="Logged"
              />
            </div>
          </Mobile>
          <TinyMobile>
            <div>
              <FooterItem
                icon={<img src={topic1} alt="topic1" />}
                name="Send Message"
              />
              <FooterItem
                icon={<img src={topic2} alt="topic2" />}
                name="View Profile"
                className="mt-2"
              />
              <FooterItem
                icon={<img src={topic3} alt="topic3" />}
                name="Quote"
                className="mt-2"
              />
              <FooterItem
                icon={<img src={topic4} alt="topic4" />}
                name="Report to moderator"
                className="mt-2"
              />
              <FooterItem
                icon={<img src={topic5} alt="topic5" />}
                name="Logged"
                className="mt-2"
              />
            </div>
          </TinyMobile>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TopicCard;
