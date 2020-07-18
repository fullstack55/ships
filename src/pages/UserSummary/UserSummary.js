import React from "react";
import { Row, Col } from "reactstrap";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import PageTitle from "../../components/common/page-title/page-title";
import Typography from "../../components/common/typography/typography";
import Paper from "../../components/common/paper/paper";
import InformationItem from "../../components/common/information-item/information-item";
import CardItem from "../../components/common/card-item/card-item";
import BasicButton from "../../components/common/BasicButton";
import photosIcon from "../../assets/images/desktop/summary/photosIcon.png";
import postsIcon from "../../assets/images/desktop/summary/postsIcon.png";
import activeIcon from "../../assets/images/desktop/summary/activeIcon.png";
import registerIcon from "../../assets/images/desktop/summary/registerIcon.png";
import mainImage from "../../assets/images/desktop/summary/bgIcon.png";
import "./UserSummary.sass";

const UserSummary = () => {
  const isExtraDesktop = useMediaQuery({ minWidth: 1281 });
  const isDesktop = useMediaQuery({ minWidth: 961 });
  const isTablet = useMediaQuery({ minWidth: 591, maxWidth: 960 });
  const isMobile = useMediaQuery({ maxWidth: 590 });
  // const isExtraMobile = useMediaQuery({ maxWidth: 320 });
  return (
    <div className="UserSummary">
      <PageTitle main={"SUMMARY"} secondary={"USER PROFILE"} />
      <Row className="justify-content-center">
        <Col xl={isExtraDesktop ? 10 : 12} lg={12}>
          <Paper className="mt-5" type="secondary">
            <Row>
              <Col lg={4} md={4} className="text-center">
                <img src={mainImage} alt="main" className="mainImage" />
              </Col>
              <Col lg={8} md={8}>
                <h5 className="ml-md-4 text-md-left text-sm-center text-center">
                  José Ricardo Rodriguez Montero
                </h5>
                <h6 className="mt-3 ml-md-4 text-md-left photocollections text-sm-center text-center">
                  PHOTO CORRECTIONS
                </h6>
                {isDesktop && (
                  <div className="d-flex justify-content-start align-items-center mt-3">
                    <BasicButton
                      text="Send a message"
                      color="primary"
                      outline={true}
                      className="mr-2"
                    />
                    <BasicButton
                      text="Add To Buddy List"
                      color="primary"
                      outline={true}
                      className="mr-2"
                    />
                    <Link to="#">
                      <h6 className="UserSummary__link ml-4">
                        Show the last posts
                      </h6>
                    </Link>
                    <Link to="#">
                      <h6 className="UserSummary__link ml-4">
                        Show general statistics
                      </h6>
                    </Link>
                  </div>
                )}
              </Col>
            </Row>
            {isTablet && (
              <Row>
                <Col>
                  <div className="d-flex justify-content-center align-items-center mt-3">
                    <BasicButton
                      text="Send a message"
                      color="primary"
                      outline={true}
                      className="mr-2"
                    />
                    <BasicButton
                      text="Add To Buddy List"
                      color="primary"
                      outline={true}
                      className="mr-2"
                    />
                    <Link to="#">
                      <h6 className="UserSummary__link ml-4">
                        Show the last posts
                      </h6>
                    </Link>
                    <Link to="#">
                      <h6 className="UserSummary__link ml-4">
                        Show general statistics
                      </h6>
                    </Link>
                  </div>
                </Col>
              </Row>
            )}

            {isMobile && (
              <Row>
                <Col xs={12}>
                  <div className="text-center mt-3">
                    <BasicButton
                      text="Send a message"
                      color="primary"
                      outline={true}
                    />
                    <BasicButton
                      text="Add To Buddy List"
                      color="primary"
                      outline={true}
                      className="mt-2"
                    />
                  </div>
                </Col>
                <Col className="text-center mt-4">
                  <Link to="#">
                    <h6 className="UserSummary__link">Show the last posts</h6>
                  </Link>
                  <Link to="#">
                    <h6 className="UserSummary__link mt-2">
                      Show general statistics
                    </h6>
                  </Link>
                </Col>
              </Row>
            )}
          </Paper>
          <Row className="cardblock mt-3">
            <Col md={3} sm={6} className={isMobile ? "mb-2" : "mb-0"}>
              <CardItem
                value="5 615"
                label={"Ship photos"}
                alt="photos"
                imgSrc={photosIcon}
                backgroundColor={`rgb(28, 72, 203)`}
                classes={{
                  rootCls: "UserSummary__card",
                  imgCls: "UserSummary__card-img",
                  topTextCls: "UserSummary__card-value",
                  labelCls: "UserSummary__card-label",
                }}
              />
            </Col>
            <Col md={3} sm={6} className={isMobile ? "mb-2" : "mb-0"}>
              <CardItem
                value="2,501 (0.548 per day)"
                label="Posts"
                alt="posts"
                imgSrc={postsIcon}
                backgroundColor={`#6482E9`}
                classes={{
                  rootCls: "UserSummary__card",
                  imgCls: "UserSummary__card-img",
                  topTextCls: "UserSummary__card-value",
                  labelCls: "UserSummary__card-label",
                }}
              />
            </Col>
            <Col
              md={3}
              sm={6}
              className={isMobile ? "mb-2 mb-sm-2" : "mb-0 mb-sm-2"}
            >
              <CardItem
                value="August 06, 2019"
                label="Last Active"
                alt="activity"
                imgSrc={activeIcon}
                withClock={true}
                backgroundColor={`#7B97F9`}
                classes={{
                  rootCls: "UserSummary__card",
                  imgCls: "UserSummary__card-img",
                  topTextCls: "UserSummary__card-value",
                  labelCls: "UserSummary__card-label",
                }}
              />
            </Col>
            <Col
              md={3}
              sm={6}
              className={isMobile ? "mb-2 mb-sm-2" : "mb-0 mb-sm-2"}
            >
              <CardItem
                value="June 16, 2004"
                label="Date Registered"
                alt="registry"
                imgSrc={registerIcon}
                withClock={true}
                backgroundColor={`#65A1E9`}
                classes={{
                  rootCls: "UserSummary__card",
                  imgCls: "UserSummary__card-img",
                  topTextCls: "UserSummary__card-value",
                  labelCls: "UserSummary__card-label",
                }}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={12} md={12} lg={6}>
              <Paper className="summary__paper summary__papers_child">
                <Typography
                  className="summary__text_s"
                  firstText="Contact"
                  secondText="information"
                  before={false}
                />
                <InformationItem title="ICQ" value="2358900" />
                <InformationItem title="AIM" value="Text" />
                <InformationItem title="MSN" value="Another text" />
                <InformationItem title="YIM" value="Text" />
                <InformationItem title="Email" value="buildmypoint@gmail.com" />
                <InformationItem title="Website" value="Shipsunderway.co.uk" />
              </Paper>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <Paper className="summary__paper summary__papers_child">
                <Typography
                  className="summary__text_s"
                  firstText="General"
                  secondText="information"
                  before={false}
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
            </Col>
          </Row>
          <Row className="mt-2 mb-5">
            <Col>
              <Paper className="summary__paper summary__paper_2">
                <Typography
                  className="summary__text_s summary__paper_2_title"
                  firstText={"Signature"}
                  before={false}
                />
                <div>
                  <span className="summary__paper_2-text">
                    {" "}
                    To view some of the shipspotting sites I use, see the
                    listing at{" "}
                  </span>
                  <a
                    className="summary__link"
                    href="http://www.shipspotting.com/modules/myalbum/photo.php?lid=510326."
                  >
                    http://www.shipspotting.com/modules/myalbum/photo.php?lid=510326.
                  </a>
                </div>
              </Paper>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default UserSummary;
