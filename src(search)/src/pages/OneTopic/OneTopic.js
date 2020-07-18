/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Row, Col } from "reactstrap";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import PageTitle from "../../components/common/page-title/page-title";
import BasicButton from "../../components/common/BasicButton";
import Pagination from "../MemberList/components/Pagination";
import TopicCard from "./components/TopicCard";
import Quote from "./components/TopicBody/Quote";
import p1 from "../../assets/images/desktop/comment/p1.png";
import p2 from "../../assets/images/desktop/comment/p2.png";
import p3 from "../../assets/images/desktop/comment/p3.png";
import p4 from "../../assets/images/desktop/comment/p4.png";
import "./OneTopic.sass";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 961 });
  return isDesktop ? children : null;
};

const TableAndMobile = ({ children }) => {
  const isDesktop = useMediaQuery({ maxWidth: 960 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 321, maxWidth: 590 });
  return isDesktop ? children : null;
};

const TabletAndDesktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 591 });
  return isDesktop ? children : null;
};

const TinyMobile = ({ children }) => {
  const isDesktop = useMediaQuery({ maxWidth: 320 });
  return isDesktop ? children : null;
};

const OneTopic = () => {
  return (
    <div className="OneTopic mb-5">
      <Row className="justify-content-center">
        <Col lg={11}>
          <Row className="align-items-center">
            <Desktop>
              <Col lg={2}>
                <Link to="#">{`« Previous Topic`}</Link>
              </Col>
            </Desktop>
            <Col className="d-flex justify-content-center">
              <PageTitle
                main={"Topic:"}
                secondary={"Ships' names in 'CAPITALS' or 'Title Case'?"}
                className={"OneTopic__title"}
              />
            </Col>
            <Desktop>
              <Col lg={2} className="d-flex justify-content-end">
                <Link to="#">{`Next Topic »`}</Link>
              </Col>
            </Desktop>
          </Row>
          <TableAndMobile>
            <Row>
              <Col className="d-flex justify-content-end">
                <Link to="#">{`« Previous Topic`}</Link>
              </Col>
              <Col className="d-flex justify-content-start">
                <Link to="#">{`Next Topic »`}</Link>
              </Col>
            </Row>
          </TableAndMobile>
          <TabletAndDesktop>
            <Row
              className="d-flex align-items-center mx-1 mx-lg-0 mt-3"
              noGutters
            >
              <Col lg={6} sm={4}>
                <Pagination right={false} />
              </Col>
              <Col lg={6} sm={8}>
                <BasicButton
                  text="Print"
                  color="primary"
                  outline={true}
                  className="float-right ml-2 OneTopic__outlineBtn"
                />
                <BasicButton
                  text="Send this topic"
                  color="primary"
                  outline={true}
                  className="float-right ml-2 OneTopic__outlineBtn"
                />
                <BasicButton
                  text="Mark Unread"
                  color="primary"
                  outline={true}
                  className="float-right ml-2 OneTopic__outlineBtn"
                />
                <BasicButton
                  text="Notify"
                  color="primary"
                  outline={true}
                  className="float-right ml-2 OneTopic__outlineBtn"
                />
                <BasicButton
                  text="Reply"
                  color="primary"
                  outline={false}
                  className="float-right ml-2 OneTopic__fillBtn"
                />
              </Col>
            </Row>
          </TabletAndDesktop>
          <Mobile>
            <Row>
              <Col className="d-flex justify-content-center">
                <Pagination right={false} />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-between mx-2">
                <BasicButton
                  text="Print"
                  color="primary"
                  outline={true}
                  className="OneTopic__outlineBtn"
                />
                <BasicButton
                  text="Send this topic"
                  color="primary"
                  outline={true}
                  className="OneTopic__outlineBtn"
                />
                <BasicButton
                  text="Mark Unread"
                  color="primary"
                  outline={true}
                  className="OneTopic__outlineBtn"
                />
                <BasicButton
                  text="Notify"
                  color="primary"
                  outline={true}
                  className="OneTopic__outlineBtn"
                />
                <BasicButton
                  text="Reply"
                  color="primary"
                  outline={false}
                  className="OneTopic__fillBtn"
                />
              </Col>
            </Row>
          </Mobile>
          <TinyMobile>
            <Row>
              <Col className="d-flex justify-content-center">
                <Pagination right={false} />
              </Col>
            </Row>
            <Row noGutters>
              <Col className="mx-2">
                <BasicButton
                  text="Reply"
                  color="primary"
                  outline={false}
                  block
                  className="OneTopic__fillBtn"
                />
              </Col>
              <Col className="mx-2">
                <BasicButton
                  text="Notify"
                  color="primary"
                  outline={true}
                  block
                  className="OneTopic__outlineBtn"
                />
              </Col>
            </Row>
            <Row>
              <Col className="mx-2 mt-2">
                <BasicButton
                  text="Print"
                  color="primary"
                  outline={true}
                  block
                  className="OneTopic__outlineBtn"
                />
                <BasicButton
                  text="Send this topic"
                  color="primary"
                  outline={true}
                  block
                  className="OneTopic__outlineBtn"
                />
                <BasicButton
                  text="Mark Unread"
                  color="primary"
                  outline={true}
                  block
                  className="OneTopic__outlineBtn"
                />
              </Col>
            </Row>
          </TinyMobile>
          <TopicCard
            picture={p1}
            name="build"
            stars={5}
            date="Webmaster Top Poster Posts: 2,026"
            contentHeader="Ship's names in 'CAPITALS' or 'Title Case'"
            createdDate="« on: February 20, 2020, 04:41:47 pm »"
            content={
              <>
                <p>
                  Unsurprisingly this has arisen afresh in the context of the
                  website upgrade, and in particular whether, if there were
                  agreement on one style, software could ease the change and
                  future uploading. That technical aspect is the only thing that
                  makes it necessary to review this question now.{" "}
                </p>
                <p>
                  In my experience, auto-alteration from lower to upper case can
                  work, though when this site introduced it in c2014 it did not
                  work well enough and was soon abandoned - mainly, I recall,
                  over treatment of non-standard letters, which we no longer
                  use, and punctuation (hyphens, apostrophes, full stops etc) as
                  well as those categories which are not ship names (eg ports,
                  funnel logos). It does not usually work at all properly the
                  other way around, because the software cannot identify where
                  the capital initial letters should go. The grosstonnage-based
                  vessel identification box under every photo uses this,
                  producing logical abominations like "Cma Cgm L'etoile",
                  "E.r.camargue", "Xxvii Syezd Kpss", "P&,osl Picardy".
                </p>
                <p>
                  Since 2014, each time it has been discussed it has just
                  revealed a lack of willingness to accept a change to a common
                  approach by one side or the other, even though that would look
                  more professional and serious for the site.
                </p>
                <p>
                  For the record, the following is copied from yesterday's
                  thread on Members' suggestions for improvement of the website
                </p>
                <Quote
                  data={
                    <p>
                      <strong>Pieter Inpyn</strong> Suggestions for improvement
                      of the website: 1) Conversion of all vessel names of all
                      the posted photo’s so far to uppercase characters. Now it
                      is a strange mix of upper and lower case text. A vessel
                      like “Devonia” can be posted as devonia, Devonia and
                      DEVONIA, with entries as such in the index-table mentioned
                      at point 3. 2) During posting / adding a photo, the vessel
                      name is converted to upper case characters straight away.
                      +++++ 1) On the bow and stern of ships I see for 99.99 %
                      only uppercase characters 2) The search-engine of the
                      "Ship Photo Search" index table on the right hand top of
                      the main screen has a problem with different entries like
                      DEVONIA, Devonia and devonia.
                    </p>
                  }
                />
                <Quote
                  data={
                    <p>
                      <strong>Allan RO</strong> I do not consider using
                      upper-case for names is the ri
                    </p>
                  }
                />
                <Quote
                  data={
                    <>
                      <p>
                        <strong>and I replied</strong> 1) Capitalisation of
                        ships' names{" "}
                      </p>
                      <p>
                        It is true that the vast majority of ships' names are in
                        all-caps on ships themselves. But this is just a matter
                        of tradition and, in some places, national registration
                        law. There are indeed some exceptons where owners have
                        themselved adopted something different for individual
                        styling or branding preference - including cursive
                        scripts, some miniscule words, misplaced full stops and
                        hyphens etc. None of this is directly relevant to what
                        we do on here.{" "}
                      </p>
                      <p>
                        This has been discussed several times before; and the
                        site's guidance was revised in the light of the last
                        round to reflect the division of opinion
                      </p>
                      <p>
                        <a href="#">
                          http://www.shipspotting.com/support/faq.php?category=How%20to%20Upload%20Photos#76
                        </a>
                      </p>
                      <p>
                        Whether a name has capitals or not makes no difference
                        to a name search - devonia, Devonia, DEVONIA, DEVoniA
                        etc all produce the same 35 photos.
                      </p>
                    </>
                  }
                />
                <p>
                  Contributions that can help reach a consensus (whatever it is)
                  are welcome
                </p>
                <p>David</p>
              </>
            }
          />
          <TopicCard
            picture={p2}
            name="build"
            stars={4}
            date="Webmaster Top Poster Posts: 2,026"
            contentHeader="Ship's names in 'CAPITALS' or 'Title Case'"
            createdDate="« on: February 20, 2020, 04:41:47 pm »"
            content={
              <>
                <p>
                  Unsurprisingly this has arisen afresh in the context of the
                  website upgrade, and in particular whether, if there were
                  agreement on one style, software could ease the change and
                  future uploading. That technical aspect is the only thing that
                  makes it necessary to review this question now.{" "}
                </p>
                <p>
                  In my experience, auto-alteration from lower to upper case can
                  work, though when this site introduced it in c2014 it did not
                  work well enough and was soon abandoned - mainly, I recall,
                  over treatment of non-standard letters, which we no longer
                  use, and punctuation (hyphens, apostrophes, full stops etc) as
                  well as those categories which are not ship names (eg ports,
                  funnel logos). It does not usually work at all properly the
                  other way around, because the software cannot identify where
                  the capital initial letters should go. The grosstonnage-based
                  vessel identification box under every photo uses this,
                  producing logical abominations like "Cma Cgm L'etoile",
                  "E.r.camargue", "Xxvii Syezd Kpss", "P&,osl Picardy".
                </p>
                <p>
                  Since 2014, each time it has been discussed it has just
                  revealed a lack of willingness to accept a change to a common
                  approach by one side or the other, even though that would look
                  more professional and serious for the site.
                </p>
                <p>
                  For the record, the following is copied from yesterday's
                  thread on Members' suggestions for improvement of the website
                </p>
              </>
            }
          />
          <TopicCard
            picture={p3}
            name="Bob Scott"
            stars={3}
            date="Home away from home Posts: 180"
            contentHeader="Ship's names in 'CAPITALS' or 'Title Case'"
            createdDate="« on: February 20, 2020, 04:41:47 pm »"
            content={
              <>
                <p>
                  Since the vast majority of ships have their names painted in
                  capitals and the registers use capitals (regardless of how the
                  name appears on the vessel, eg AIDAbella on the ship/AIDABELLA
                  in the registers), it follows logically that using capitals
                  for ship names should be the mandatory "house style" on this
                  site.
                </p>
              </>
            }
          />
          <TopicCard
            picture={p4}
            name="Jim McQuarrie"
            stars={2}
            date="Quite a regular Posts: 54"
            contentHeader="Ship's names in 'CAPITALS' or 'Title Case'"
            createdDate="« on: February 20, 2020, 04:41:47 pm »"
            content={
              <>
                <p>CHANGED ALL MY PICS TO CAPITALS</p>
              </>
            }
          />
        </Col>
      </Row>
    </div>
  );
};

export default OneTopic;
