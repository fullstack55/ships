/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
  Badge,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import PageTitle from "../../components/common/page-title/page-title";
import Pagination from "../MemberList/components/Pagination";
import BasicSelect from "../../components/common/BasicSelect";
import BasicButton from "../../components/common/BasicButton";
import icon7 from "../../assets/images/desktop/forum/icon7.png";
import icon8 from "../../assets/images/desktop/forum/icon8.png";
import icon9 from "../../assets/images/desktop/forum/icon9.png";
import icon10 from "../../assets/images/desktop/forum/icon10.png";
import icon11 from "../../assets/images/desktop/forum/icon11.png";
import icon12 from "../../assets/images/desktop/forum/icon12.png";
import icon13 from "../../assets/images/desktop/forum/icon13.png";
import icon14 from "../../assets/images/desktop/forum/icon14.png";
import "./OneCategory.sass";

const options = [
  {
    value: "Shipping news and informaion",
    label: "Shipping news and informaion",
  },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const OneCategory = () => {
  const isMobile = useMediaQuery({ maxWidth: 769 });

  return (
    <div className="OneCategory mb-5">
      <PageTitle main={"SHIPPING"} secondary={"NEWS AND INFORMATION"} />
      <Row className="justify-content-center mt-3" noGutters>
        <Col lg={11}>
          <Row className="justify-content-center">
            <Col className="OneCategory__tabBox">
              <div className="OneCategory__tab">
                <img src={icon7} alt="icon7" />
                <h6 className="ml-lg-3">Topic you have posted in</h6>
              </div>
              <div className="OneCategory__tab">
                <img src={icon8} alt="icon8" />
                <h6 className="ml-lg-3">Normal Topic</h6>
              </div>
              <div className="OneCategory__tab">
                <img src={icon9} alt="icon9" />
                <h6 className="ml-lg-3">
                  Hot Topic
                  <br />
                  (More than 15 replies)
                </h6>
              </div>
              <div className="OneCategory__tab">
                <img src={icon10} alt="icon10" />
                <h6 className="ml-lg-3">
                  Very Hot Topic <br />
                  (More than 25 replies)
                </h6>
              </div>
              <div className="OneCategory__tab">
                <img src={icon11} alt="icon11" />
                <h6 className="ml-lg-3">Locked Topic</h6>
              </div>
              <div className="OneCategory__tab">
                <img src={icon12} alt="icon12" />
                <h6 className="ml-lg-3">Sticky Topic</h6>
              </div>
              <div className="OneCategory__tab">
                <img src={icon13} alt="icon13" />
                <h6 className="ml-lg-3">Poll</h6>
              </div>
              <div className="OneCategory__tab">
                <img src={icon14} alt="icon14" />
                <h6 className="ml-lg-3">View Last Post</h6>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mx-2">
              <Card>
                <CardHeader>
                  <Row className="align-items-center">
                    <Col className="OneCategory__cardHeaderBlock">
                      <Pagination right={false} />
                      <Mobile>
                        <div>
                          <h6 className="d-inline-block mr-2">Jump To:</h6>
                          <BasicSelect
                            className="OneCategory__basicSelect mr-2"
                            defaultValue={options[0]}
                            options={options}
                          />
                        </div>
                      </Mobile>
                    </Col>
                    <Col
                      lg={8}
                      md={9}
                      className="d-sm-flex justify-content-sm-end align-items-sm-center"
                    >
                      <Default>
                        <h6 className="mr-2">Jump To:</h6>
                        <BasicSelect
                          className="OneCategory__basicSelect mr-2"
                          defaultValue={options[0]}
                          options={options}
                        />
                      </Default>
                      <BasicButton
                        text="Mark Read"
                        color="primary"
                        outline={true}
                        block={isMobile}
                        className="float-right mr-2 mt-3 mt-sm-0"
                      />
                      <BasicButton
                        text="Notify"
                        color="primary"
                        outline={true}
                        block={isMobile}
                        className="float-right mr-2 mt-3 mt-sm-0"
                      />
                      <BasicButton
                        text="New Topic"
                        color="primary"
                        outline={false}
                        block={isMobile}
                        className="float-right mr-2 mt-3 mt-sm-0"
                      />
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Default>
                    <Table borderless responsive>
                      <thead>
                        <tr>
                          <th></th>
                          <th style={{ width: "40%" }}>SUBJECT</th>
                          <th className="text-right" style={{ width: "20%" }}>
                            STARTED BY
                          </th>
                          <th style={{ width: "10%" }}>REPLIES</th>
                          <th style={{ width: "8%" }}>VIEWS</th>
                          <th className="d-flex align-items-center">
                            LAST POST
                            <i
                              className="fa fa-sort-desc ml-2"
                              aria-hidden="true"
                            ></i>
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img src={icon10} alt="icon10" />
                          </td>
                          <td className="OneCategory__name">
                            <Link to="/forum/forums/onetopic">
                              Introduction - What it's all about - How to
                              respond
                            </Link>
                            <Badge color="success" className="ml-2">
                              New
                            </Badge>
                          </td>
                          <td className="text-right OneCategory__startedBy">
                            <img src={icon12} alt="icon12" />
                            <img src={icon11} alt="icon11" />
                            <Link to="/forum/forums/usersummary">
                              davidships
                            </Link>
                          </td>
                          <td className="OneCategory__replies">123</td>
                          <td className="OneCategory__replies">164 288</td>
                          <td className="OneCategory__replies">
                            December 08, 2015, 07:05:10 am by{" "}
                            <Link to="#">Michael Wirth</Link>
                          </td>
                          <td>
                            <img src={icon14} alt="icon14" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src={icon10} alt="icon10" />
                          </td>
                          <td className="OneCategory__name">
                            <Link to="/forum/forums/onetopic">
                              Introduction - What it's all about - How to
                              respond
                            </Link>
                            <Badge color="success" className="ml-2">
                              New
                            </Badge>
                          </td>
                          <td className="text-right OneCategory__startedBy">
                            <img src={icon12} alt="icon12" />
                            <img src={icon11} alt="icon11" />
                            <Link to="/forum/forums/usersummary">
                              davidships
                            </Link>
                          </td>
                          <td className="OneCategory__replies">123</td>
                          <td className="OneCategory__replies">164 288</td>
                          <td className="OneCategory__replies">
                            December 08, 2015, 07:05:10 am by{" "}
                            <Link to="#">Michael Wirth</Link>
                          </td>
                          <td>
                            <img src={icon14} alt="icon14" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src={icon8} alt="icon10" />
                          </td>
                          <td className="OneCategory__name">
                            <Link to="/forum/forums/onetopic">
                              Introduction - What it's all about - How to
                              respond
                            </Link>
                            <Badge color="success" className="ml-2">
                              New
                            </Badge>
                          </td>
                          <td className="text-right OneCategory__startedBy">
                            <img src={icon12} alt="icon12" />
                            <img src={icon11} alt="icon11" />
                            <Link to="/forum/forums/usersummary">
                              davidships
                            </Link>
                          </td>
                          <td className="OneCategory__replies">123</td>
                          <td className="OneCategory__replies">164 288</td>
                          <td className="OneCategory__replies">
                            December 08, 2015, 07:05:10 am by{" "}
                            <Link to="#">Michael Wirth</Link>
                          </td>
                          <td>
                            <img src={icon14} alt="icon14" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src={icon8} alt="icon10" />
                          </td>
                          <td className="OneCategory__name">
                            <Link to="/forum/forums/onetopic">
                              Introduction - What it's all about - How to
                              respond
                            </Link>
                            <Badge color="success" className="ml-2">
                              New
                            </Badge>
                          </td>
                          <td className="text-right OneCategory__startedBy">
                            <img src={icon12} alt="icon12" />
                            <img src={icon11} alt="icon11" />
                            <Link to="/forum/forums/usersummary">
                              davidships
                            </Link>
                          </td>
                          <td className="OneCategory__replies">123</td>
                          <td className="OneCategory__replies">164 288</td>
                          <td className="OneCategory__replies">
                            December 08, 2015, 07:05:10 am by{" "}
                            <Link to="#">Michael Wirth</Link>
                          </td>
                          <td>
                            <img src={icon14} alt="icon14" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src={icon8} alt="icon10" />
                          </td>
                          <td className="OneCategory__name">
                            <Link to="/forum/forums/onetopic">
                              Introduction - What it's all about - How to
                              respond
                            </Link>
                            {/* <Badge color="success" className="ml-2">
                            New
                          </Badge> */}
                          </td>
                          <td className="text-right OneCategory__startedBy">
                            <img src={icon12} alt="icon12" />
                            <img src={icon11} alt="icon11" />
                            <Link to="/forum/forums/usersummary">
                              davidships
                            </Link>
                          </td>
                          <td className="OneCategory__replies">123</td>
                          <td className="OneCategory__replies">164 288</td>
                          <td className="OneCategory__replies">
                            December 08, 2015, 07:05:10 am by{" "}
                            <Link to="#">Michael Wirth</Link>
                          </td>
                          <td>
                            <img src={icon14} alt="icon14" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src={icon8} alt="icon10" />
                          </td>
                          <td className="OneCategory__name">
                            <Link to="/forum/forums/onetopic">
                              Introduction - What it's all about - How to
                              respond
                            </Link>
                            {/* <Badge color="success" className="ml-2">
                            New
                          </Badge> */}
                          </td>
                          <td className="text-right OneCategory__startedBy">
                            <img src={icon12} alt="icon12" />
                            <img src={icon11} alt="icon11" />
                            <Link to="/forum/forums/usersummary">
                              davidships
                            </Link>
                          </td>
                          <td className="OneCategory__replies">123</td>
                          <td className="OneCategory__replies">164 288</td>
                          <td className="OneCategory__replies">
                            December 08, 2015, 07:05:10 am by{" "}
                            <Link to="#">Michael Wirth</Link>
                          </td>
                          <td>
                            <img src={icon14} alt="icon14" />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Default>
                  <Mobile>
                    <div className="OneCategory__mobileBox">
                      <div>
                        <div className="subject">
                          <h6 className="t_header">SUBJECT</h6>
                          <div className="name">
                            <img src={icon10} alt="icon10" />
                            <div>
                              <Link to="/forum/forums/onetopic">
                                Introduction - What it's all about - How to
                                respond
                              </Link>
                              <Badge color="success" className="ml-2">
                                New
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="subject">
                          <h6 className="t_header">STARTED BY</h6>
                          <Link to="/forum/forums/usersummary">davidships</Link>
                        </div>
                        <div className="subject">
                          <h6 className="t_header">REPLIES</h6>
                          123
                        </div>
                        <div className="subject">
                          <h6 className="t_header">VIEWS</h6>
                          164 288
                        </div>
                        <div className="subject">
                          <h6 className="t_header">LAST POST</h6>
                          <div className="mb-2">
                            December 08, 2015, 07:05:10 am by{" "}
                            <Link to="#">Michael Wirth</Link>
                          </div>
                        </div>
                      </div>
                      <div>
                        <img
                          src={icon14}
                          alt="icon14"
                          className="OneCategory__mobileBox__go"
                        />
                      </div>
                    </div>
                  </Mobile>
                  <Mobile>
                    <div className="OneCategory__mobileBox">
                      <div>
                        <div className="subject">
                          <h6 className="t_header">SUBJECT</h6>
                          <div className="name">
                            <img src={icon10} alt="icon10" />
                            <div>
                              <Link to="/forum/forums/onetopic">
                                Introduction - What it's all about - How to
                                respond
                              </Link>
                              <Badge color="success" className="ml-2">
                                New
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="subject">
                          <h6 className="t_header">STARTED BY</h6>
                          <Link to="/forum/forums/usersummary">davidships</Link>
                        </div>
                        <div className="subject">
                          <h6 className="t_header">REPLIES</h6>
                          123
                        </div>
                        <div className="subject">
                          <h6 className="t_header">VIEWS</h6>
                          164 288
                        </div>
                        <div className="subject">
                          <h6 className="t_header">LAST POST</h6>
                          <div className="mb-2">
                            December 08, 2015, 07:05:10 am by{" "}
                            <Link to="#">Michael Wirth</Link>
                          </div>
                        </div>
                      </div>
                      <div>
                        <img
                          src={icon14}
                          alt="icon14"
                          className="OneCategory__mobileBox__go"
                        />
                      </div>
                    </div>
                  </Mobile>
                  <Mobile>
                    <div className="OneCategory__mobileBox">
                      <div>
                        <div className="subject">
                          <h6 className="t_header">SUBJECT</h6>
                          <div className="name">
                            <img src={icon10} alt="icon10" />
                            <div>
                              <Link to="/forum/forums/onetopic">
                                Introduction - What it's all about - How to
                                respond
                              </Link>
                              <Badge color="success" className="ml-2">
                                New
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="subject">
                          <h6 className="t_header">STARTED BY</h6>
                          <Link to="/forum/forums/usersummary">davidships</Link>
                        </div>
                        <div className="subject">
                          <h6 className="t_header">REPLIES</h6>
                          123
                        </div>
                        <div className="subject">
                          <h6 className="t_header">VIEWS</h6>
                          164 288
                        </div>
                        <div className="subject">
                          <h6 className="t_header">LAST POST</h6>
                          <div className="mb-2">
                            December 08, 2015, 07:05:10 am by{" "}
                            <Link to="#">Michael Wirth</Link>
                          </div>
                        </div>
                      </div>
                      <div>
                        <img
                          src={icon14}
                          alt="icon14"
                          className="OneCategory__mobileBox__go"
                        />
                      </div>
                    </div>
                  </Mobile>
                  <Mobile>
                    <div className="OneCategory__mobileBox">
                      <div>
                        <div className="subject">
                          <h6 className="t_header">SUBJECT</h6>
                          <div className="name">
                            <img src={icon10} alt="icon10" />
                            <div>
                              <Link to="/forum/forums/onetopic">
                                Introduction - What it's all about - How to
                                respond
                              </Link>
                              <Badge color="success" className="ml-2">
                                New
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="subject">
                          <h6 className="t_header">STARTED BY</h6>
                          <Link to="/forum/forums/usersummary">davidships</Link>
                        </div>
                        <div className="subject">
                          <h6 className="t_header">REPLIES</h6>
                          123
                        </div>
                        <div className="subject">
                          <h6 className="t_header">VIEWS</h6>
                          164 288
                        </div>
                        <div className="subject">
                          <h6 className="t_header">LAST POST</h6>
                          <div className="mb-2">
                            December 08, 2015, 07:05:10 am by{" "}
                            <Link to="#">Michael Wirth</Link>
                          </div>
                        </div>
                      </div>
                      <div>
                        <img
                          src={icon14}
                          alt="icon14"
                          className="OneCategory__mobileBox__go"
                        />
                      </div>
                    </div>
                  </Mobile>
                  <Mobile>
                    <div className="OneCategory__mobileBox">
                      <div>
                        <div className="subject">
                          <h6 className="t_header">SUBJECT</h6>
                          <div className="name">
                            <img src={icon10} alt="icon10" />
                            <div>
                              <Link to="/forum/forums/onetopic">
                                Introduction - What it's all about - How to
                                respond
                              </Link>
                              <Badge color="success" className="ml-2">
                                New
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="subject">
                          <h6 className="t_header">STARTED BY</h6>
                          <Link to="/forum/forums/usersummary">davidships</Link>
                        </div>
                        <div className="subject">
                          <h6 className="t_header">REPLIES</h6>
                          123
                        </div>
                        <div className="subject">
                          <h6 className="t_header">VIEWS</h6>
                          164 288
                        </div>
                        <div className="subject">
                          <h6 className="t_header">LAST POST</h6>
                          <div className="mb-2">
                            December 08, 2015, 07:05:10 am by{" "}
                            <Link to="#">Michael Wirth</Link>
                          </div>
                        </div>
                      </div>
                      <div>
                        <img
                          src={icon14}
                          alt="icon14"
                          className="OneCategory__mobileBox__go"
                        />
                      </div>
                    </div>
                  </Mobile>
                  <Mobile>
                    <div className="OneCategory__mobileBox">
                      <div>
                        <div className="subject">
                          <h6 className="t_header">SUBJECT</h6>
                          <div className="name">
                            <img src={icon10} alt="icon10" />
                            <div>
                              <Link to="/forum/forums/onetopic">
                                Introduction - What it's all about - How to
                                respond
                              </Link>
                              <Badge color="success" className="ml-2">
                                New
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="subject">
                          <h6 className="t_header">STARTED BY</h6>
                          <Link to="/forum/forums/usersummary">davidships</Link>
                        </div>
                        <div className="subject">
                          <h6 className="t_header">REPLIES</h6>
                          123
                        </div>
                        <div className="subject">
                          <h6 className="t_header">VIEWS</h6>
                          164 288
                        </div>
                        <div className="subject">
                          <h6 className="t_header">LAST POST</h6>
                          <div className="mb-2">
                            December 08, 2015, 07:05:10 am by{" "}
                            <Link to="#">Michael Wirth</Link>
                          </div>
                        </div>
                      </div>
                      <div>
                        <img
                          src={icon14}
                          alt="icon14"
                          className="OneCategory__mobileBox__go"
                        />
                      </div>
                    </div>
                  </Mobile>
                </CardBody>
                <CardFooter>
                  <Row className="align-items-center">
                    <Col className="OneCategory__cardHeaderBlock">
                      <Pagination right={false} />
                      <Mobile>
                        <div>
                          <h6 className="mr-2">Jump To:</h6>
                          <BasicSelect
                            className="OneCategory__basicSelect mr-2"
                            defaultValue={options[0]}
                            options={options}
                          />
                        </div>
                      </Mobile>
                    </Col>
                    <Col
                      lg={8}
                      md={9}
                      className="d-sm-flex justify-content-sm-end align-items-sm-center"
                    >
                      <Default>
                        <h6 className="mr-2">Jump To:</h6>
                        <BasicSelect
                          className="OneCategory__basicSelect mr-2"
                          defaultValue={options[0]}
                          options={options}
                        />
                      </Default>
                      <BasicButton
                        text="Mark Read"
                        color="primary"
                        outline={true}
                        block={isMobile}
                        className="float-right mr-2 mt-3 mt-sm-0"
                      />
                      <BasicButton
                        text="Notify"
                        color="primary"
                        outline={true}
                        block={isMobile}
                        className="float-right mr-2 mt-3 mt-sm-0"
                      />
                      <BasicButton
                        text="New Topic"
                        color="primary"
                        outline={false}
                        block={isMobile}
                        className="float-right mr-2 mt-3 mt-sm-0"
                      />
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default OneCategory;
