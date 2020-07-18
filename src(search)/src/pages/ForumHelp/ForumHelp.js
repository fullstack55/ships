/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import classnames from "classnames";
import { Row, Col, Container } from "reactstrap";
import Title from "../../components/common/title/title";
import LinkText from "../../components/common/LinkText";
import popup from "../../assets/images/desktop/forum/popup.png";
import registeration from "../../assets/images/desktop/forum/registeration.png";
import "./ForumHelp.sass";

const ForumHelp = () => {
  const [activeTab, setActiveTab] = useState("2");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="ForumHelp mb-5">
      <Title boldText="HELP" regularText="INFO" />
      <Container fluid>
        <Row className="justify-content-center ForumHelp__tab" noGutters>
          <Col lg={6}>
            <Row className="text-center" noGutters>
              <Col>
                <h6
                  className={classnames([
                    { ForumHelp__Nav__active: activeTab === "1" },
                    "ForumHelp__Nav",
                  ])}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Introduction
                </h6>
              </Col>
              <Col>
                <h6
                  className={classnames([
                    { ForumHelp__Nav__active: activeTab === "2" },
                    "ForumHelp__Nav",
                  ])}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Registering
                </h6>
              </Col>
              <Col>
                <h6
                  className={classnames([
                    { ForumHelp__Nav__active: activeTab === "3" },
                    "ForumHelp__Nav",
                  ])}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  Loggin In
                </h6>
              </Col>
              <Col>
                <h6
                  className={classnames([
                    { ForumHelp__Nav__active: activeTab === "4" },
                    "ForumHelp__Nav",
                  ])}
                  onClick={() => {
                    toggle("4");
                  }}
                >
                  Profile
                </h6>
              </Col>
              <Col>
                <h6
                  className={classnames([
                    { ForumHelp__Nav__active: activeTab === "5" },
                    "ForumHelp__Nav",
                  ])}
                  onClick={() => {
                    toggle("5");
                  }}
                >
                  Posting
                </h6>
              </Col>
              <Col>
                <h6
                  className={classnames([
                    { ForumHelp__Nav__active: activeTab === "6" },
                    "ForumHelp__Nav",
                  ])}
                  onClick={() => {
                    toggle("6");
                  }}
                >
                  Personal Message
                </h6>
              </Col>
              <Col>
                <h6
                  className={classnames([
                    { ForumHelp__Nav__active: activeTab === "7" },
                    "ForumHelp__Nav",
                  ])}
                  onClick={() => {
                    toggle("7");
                  }}
                >
                  Searching
                </h6>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center ForumHelp__content">
          <Col lg={10}>
            <h6>
              When you have set up your SMF forum, or wish to join another SMF
              forum, you should register a username. This will enable you to
              maintain a consistent identity while posting and keep track of
              what you've read, no matter where you're working from or what
              computer you're using. You'll be able to fill out a personal{" "}
              <LinkText>profile</LinkText> and use the built-in{" "}
              <LinkText>personal message system</LinkText>. You'll be able to
              subscribe to email notifications, monitor your forum activity and
              more.
            </h6>
          </Col>
        </Row>
        <Row className="mt-4 justify-content-center ForumHelp__content">
          <Col lg={10}>
            <h6>
              <span className="mr-4">1.</span>{" "}
              <LinkText>How to Register</LinkText>
            </h6>
            <h6 className="mt-3">
              <span className="mr-4">2.</span>{" "}
              <LinkText>The Registration Screen</LinkText>
            </h6>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center ForumHelp__content">
          <Col lg={10}>
            <h4>
              <strong>HOW TO</strong> REGISTER
            </h4>
          </Col>
        </Row>
        <Row className="mt-2 justify-content-center ForumHelp__content">
          <Col lg={10}>
            <h6>
              Assuming you've arrived at the forum as a guest and wish to{" "}
              register, you should be looking at one of these two things:
            </h6>
            <ul className="mt-3">
              <li className="ml-3">
                <h6>
                  Any page of the forum, in which you case you should select{" "}
                  <strong>Register</strong> from the{" "}
                  <LinkText>main menu</LinkText>.
                </h6>
              </li>
              <li className="ml-3 mt-3">
                <h6>
                  A login screen headed by a warning about access being
                  restricted to registered members, in which case you should
                  either use the registration link provided or select{" "}
                  <strong>Register</strong> from the{" "}
                  <LinkText>main menu</LinkText>.
                </h6>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3 justify-content-center ForumHelp__content">
          <Col lg={10} className="text-center">
            <img src={popup} alt="popup" />
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center ForumHelp__content">
          <Col lg={10}>
            <h4>
              <strong>THE REGISTRATION</strong> SCREEN
            </h4>
          </Col>
        </Row>
        <Row className="mt-3 justify-content-center ForumHelp__content">
          <Col lg={10} className="text-center">
            <img src={registeration} alt="registeration" />
          </Col>
        </Row>
        <Row className="mt-3 justify-content-center ForumHelp__content">
          <Col lg={10}>
            <h6>
              When you arrive at the registration screen, you will need to enter
              a <strong>username</strong>, <strong>email address</strong> and{" "}
              <strong>password</strong>, and may be offered the option of hiding
              your email address. Since most forums also require you to agree to
              their terms of use before your registration is accepted, you will
              normally have to read the agreement and check{" "}
              <strong>I Agree</strong> before continuing. What happens next
              depends on how the forum is configured, but, if the next thing you
              see is a login screen headed by a message inviting you to proceed,
              that's it, you're through and you can proceed to login! If not,
              there are two further possibilities:
            </h6>
          </Col>
        </Row>
        <Row className="mt-2 justify-content-center ForumHelp__content">
          <Col lg={10}>
            <ul className="mt-3">
              <li className="ml-3">
                <h6>
                  If registration has been configured to require email
                  activation, the next screen will tell you so and you should
                  receive an immediate email with instructions about how to
                  proceed. But there's also a useful link ('Did you miss your
                  activation email?') in the User Info box in case you miss this
                  email or mistype your email address.
                </h6>
              </li>
              <li className="ml-3 mt-3">
                <h6>
                  If registration has been configured to require approval from a
                  forum administrator, the next screen will tell you so and you
                  should receive both an acknowledgement by email and another
                  email later to inform you whether or not your application has
                  been approved.
                </h6>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForumHelp;
