import React from "react";

import { Row, Col, Button, Card, CardHeader, CardBody } from "reactstrap";
import Header from "../../components/header/header";
import Footer from "../../components/common/footer/footer";
import PageTitle from "../../components/common/page-title/page-title";
import ReactPlayer from "react-player";
import Typography from "../../components/common/typography/typography";
import Feedback from "./components/Feedback";
import Comments from "./components/Comments";
import "./VideoOpen.sass";

const VideoOpen = () => {
  return (
    <>
      <Header info={false} />
      <Row className="justify-content-center VideoOpen" noGutters>
        <Col lg={9} md={11}>
          <PageTitle
            main={"Timelapse CHRISTINA"}
            secondary={
              "B IMO 9304162 D5BT6 LIBERIA grabado en GIJON en HDel 14.02.2020 por Ruben Hevia."
            }
            className={"VideoOpen__title"}
          />
          <div>
            <Button className="VideoOpen__tweet ml-2" color="primary" size="sm">
              <i className="fa fa-twitter mr-1" aria-hidden="true"></i>
              Tweet
            </Button>
            {/* <Button className="VideoOpen__orange" color="primary" size="sm">
                <i className="fa fa-twitter mr-1" aria-hidden="true"></i>
                Tweet
              </Button> */}
          </div>
          <Row className="mt-3">
            <Col className="d-flex justify-content-center">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=C0DPdy98e4c"
                controls
                width="95%"
                height="648px"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg="10" md={12}>
              <Card className="mx-md-3">
                <CardHeader>
                  <Typography
                    firstText={"Video"}
                    secondText={"information"}
                    before
                  />
                </CardHeader>
                <CardBody>
                  <h6>
                    Date of upload: <strong>Mar 11, 2020</strong>
                  </h6>
                  <h6 className="mt-3">
                    Video title:{" "}
                    <strong>
                      Timelapse CHRISTINA B IMO 9304162 D5BT6 LIBERIA grabado en
                      GIJON en HD el 14.02.2020 por Ruben Hevia.
                    </strong>
                  </h6>
                  <h6 className="mt-3">
                    Uploaded by: <strong>DiFoo</strong>
                  </h6>
                  <h6 className="mt-3">
                    Views: <strong>5</strong>
                  </h6>
                  <h6 className="mt-5">Description:</h6>
                  <h6 className="my-3">
                    Timelapse CHRISTINA B IMO 9304162 D5BT6 LIBERIA grabado en
                    GIJON en HD el 14.02.2020 por Ruben Hevia.
                  </h6>
                </CardBody>
              </Card>
            </Col>
            <Col className="pt-5 VideoOpen__feedbackBox">
              <Feedback
                icon={<i className="fa fa-thumbs-up" aria-hidden="true"></i>}
                name={"Like"}
              />
              <Feedback
                icon={<i className="fa fa-star-o" aria-hidden="true"></i>}
                name={"Add to favorites"}
                className="mt-lg-4 mt-md-0 mt-sm-4"
              />
              <Feedback
                icon={<i className="fa fa-comment-o" aria-hidden="true"></i>}
                name={"Add Comment"}
                className="mt-lg-4 mt-md-0 mt-sm-4"
              />
              <Feedback
                icon={<i className="fa fa-pencil" aria-hidden="true"></i>}
                name={"Edit info"}
                className="mt-lg-4 mt-md-0 mt-sm-4"
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Comments />
            </Col>
          </Row>
        </Col>
      </Row>

      <Footer />
    </>
  );
};

export default VideoOpen;
