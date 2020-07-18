import React from "react";
import { Row, Col, Table } from "reactstrap";
import { useMediaQuery } from "react-responsive";
import Typography from "../../../../../../components/common/typography/typography";
import Checkbox from "../../../../../../components/common/checkbox/checkbox";
import Paper from "../../../../../../components/common/paper/paper";
import BasicButton from "../../../../../../components/common/BasicButton";
import "./CurrentTopic.sass";

const CurrentTopic = () => {
  const isMobile = useMediaQuery({ maxWidth: 590 });

  return (
    <Paper className={"account-settings__paper"}>
      <Row className="CurrentTopic" noGutters>
        <Col>
          <Typography
            firstText="Current Topic"
            secondText="Notifications"
            className="Notifications__subsection"
          />
          {isMobile ? (
            <div className="CurrentTopic__mobile">
              <div className="text-left">
                <Checkbox
                  name={"full"}
                  label="Select All"
                  className="justify-content-start"
                />
              </div>
              <div className="d-flex">
                <h6 className="CurrentTopic__mobile__label">SUBJECT</h6>
                <div>
                  <h6 className="CurrentTopic__special">WEBSITE UPDATING</h6>
                  <h6 className="CurrentTopic__hint mt-1">
                    in Shipspotters all over the world
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <h6 className="CurrentTopic__mobile__label">STARTED BY</h6>
                <h6 className="CurrentTopic__special">CMA CGM BELLINI</h6>
              </div>
              <div className="d-flex">
                <h6 className="CurrentTopic__mobile__label">SELECT</h6>
                <h6 className="CurrentTopic__special">
                  <Checkbox name={"full"} className="justify-content-start" />
                </h6>
              </div>
              <hr />
              <div className="d-flex">
                <h6 className="CurrentTopic__mobile__label">SUBJECT</h6>
                <div>
                  <h6 className="CurrentTopic__special">WEBSITE UPDATING</h6>
                  <h6 className="CurrentTopic__hint mt-1">
                    in Shipspotters all over the world
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <h6 className="CurrentTopic__mobile__label">STARTED BY</h6>
                <h6 className="CurrentTopic__special">CMA CGM BELLINI</h6>
              </div>
              <div className="d-flex">
                <h6 className="CurrentTopic__mobile__label">SELECT</h6>
                <h6 className="CurrentTopic__special">
                  <Checkbox name={"full"} className="justify-content-start" />
                </h6>
              </div>
              <hr />
              <div className="d-flex">
                <h6 className="CurrentTopic__mobile__label">SUBJECT</h6>
                <div>
                  <h6 className="CurrentTopic__special">WEBSITE UPDATING</h6>
                  <h6 className="CurrentTopic__hint mt-1">
                    in Shipspotters all over the world
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <h6 className="CurrentTopic__mobile__label">STARTED BY</h6>
                <h6 className="CurrentTopic__special">CMA CGM BELLINI</h6>
              </div>
              <div className="d-flex">
                <h6 className="CurrentTopic__mobile__label">SELECT</h6>
                <h6 className="CurrentTopic__special">
                  <Checkbox name={"full"} className="justify-content-start" />
                </h6>
              </div>
            </div>
          ) : (
            <Table borderless>
              <thead>
                <tr>
                  <th>SUBJECT</th>
                  <th>STARTED BY</th>
                  <th className="float-right">
                    <Checkbox name={"full"} />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6 className="CurrentTopic__special">WEBSITE UPDATING</h6>
                    <h6 className="CurrentTopic__hint mt-1">
                      in Shipspotters all over the world
                    </h6>
                  </td>
                  <td>
                    <h6 className="CurrentTopic__special">CMA CBM BELLINI</h6>
                  </td>
                  <td className="float-right">
                    <Checkbox name={"full"} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="CurrentTopic__special">WEBSITE UPDATING</h6>
                    <h6 className="CurrentTopic__hint mt-1">
                      in Shipspotters all over the world
                    </h6>
                  </td>
                  <td>
                    <h6 className="CurrentTopic__special">build</h6>
                  </td>
                  <td className="float-right">
                    <Checkbox name={"full"} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="CurrentTopic__special">WEBSITE UPDATING</h6>
                    <h6 className="CurrentTopic__hint mt-1">
                      in Shipspotters all over the world
                    </h6>
                  </td>
                  <td>
                    <h6 className="CurrentTopic__special">CMA CBM BELLINI</h6>
                  </td>
                  <td className="float-right">
                    <Checkbox name={"full"} />
                  </td>
                </tr>
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <BasicButton text="Unsubscribe" color="primary" outline={true} />
        </Col>
      </Row>
    </Paper>
  );
};

export default CurrentTopic;
