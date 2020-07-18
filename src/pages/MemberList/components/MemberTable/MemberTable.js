/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Row, Col, Table } from "reactstrap";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import icon1 from "../../../../assets/images/desktop/forum/icon1.png";
import icon2 from "../../../../assets/images/desktop/forum/icon2.png";
import icon3 from "../../../../assets/images/desktop/forum/icon3.png";
import icon4 from "../../../../assets/images/desktop/forum/icon4.png";
import icon5 from "../../../../assets/images/desktop/forum/icon5.png";
import icon6 from "../../../../assets/images/desktop/forum/icon6.png";

import "./MemberTable.sass";

const MemberTable = () => {
  const isMobile = useMediaQuery({ maxWidth: 590 });
  return (
    <Row className="MemberTable">
      <Col>
        {!isMobile ? (
          <Table borderless>
            <thead>
              <tr>
                <th className="d-flex align-items-center">
                  STATUS{" "}
                  <i className="fa fa-sort-desc ml-2" aria-hidden="true"></i>
                </th>
                <th style={{ paddingRight: 100 }}>USERNAME</th>
                <th className="text-center">EMAIL</th>
                <th className="text-right">WEBSITE</th>
                <th className="text-right">ICQ</th>
                <th className="text-right">AIM</th>
                <th className="text-right">YIM</th>
                <th className="text-right">MSN</th>
                <th style={{ paddingRight: 100 }} className="text-left">
                  POSITION
                </th>
                <th className="text-right">DATE REGISTER</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div className="MemberTable__online d-inline-block mr-1"></div>
                  online
                </th>
                <td className="MemberTable__name">Clyde Dickens</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-left MemberTable__position">
                  Just cannot stay away
                </td>
                <td className="text-right">2007-03-06</td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="MemberTable__online d-inline-block mr-1"></div>
                  online
                </th>
                <td className="MemberTable__name">bameshops170s</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-left MemberTable__position">Top Poster</td>
                <td className="text-right">2007-03-06</td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="MemberTable__online d-inline-block mr-1"></div>
                  online
                </th>
                <td className="MemberTable__name">build</td>
                <td className="text-center">
                  <img src={icon1} alt="icon1" />
                </td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-left MemberTable__position">
                  Just popping in
                </td>
                <td className="text-right">2007-03-06</td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="MemberTable__online d-inline-block mr-1"></div>
                  online
                </th>
                <td className="MemberTable__name">bushmakin</td>
                <td className="text-center">
                  <img src={icon1} alt="icon1" />
                </td>
                <td className="text-center">
                  <img src={icon2} alt="icon2" />
                </td>
                <td className="text-center">
                  <img src={icon3} alt="icon3" />
                </td>
                <td className="text-center">
                  <img src={icon4} alt="icon4" />
                </td>
                <td className="text-center">
                  <img src={icon5} alt="icon5" />
                </td>
                <td className="text-center">
                  <img src={icon6} alt="icon6" />
                </td>
                <td className="text-left MemberTable__position">
                  Just cannot stay away
                </td>
                <td className="text-right">2007-03-06</td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="MemberTable__online d-inline-block mr-1"></div>
                  online
                </th>
                <td className="MemberTable__name">Clyde Dickens</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-left MemberTable__position">
                  Just cannot stay away
                </td>
                <td className="text-right">2007-03-06</td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="MemberTable__offline d-inline-block mr-1"></div>
                  offline
                </th>
                <td className="MemberTable__name">bameshops170s</td>
                <td className="text-center">
                  <img src={icon1} alt="icon1" />
                </td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-left MemberTable__position">-</td>
                <td className="text-right">2007-03-06</td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="MemberTable__offline d-inline-block mr-1"></div>
                  offline
                </th>
                <td className="MemberTable__name">build</td>
                <td className="text-center">
                  <img src={icon1} alt="icon1" />
                </td>
                <td className="text-center">
                  <img src={icon2} alt="icon2" />
                </td>
                <td className="text-center">
                  <img src={icon3} alt="icon3" />
                </td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-left MemberTable__position">-</td>
                <td className="text-right">2007-03-06</td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="MemberTable__offline d-inline-block mr-1"></div>
                  offline
                </th>
                <td className="MemberTable__name">bushmakin</td>
                <td className="text-center">
                  <img src={icon1} alt="icon1" />
                </td>
                <td className="text-center">
                  <img src={icon2} alt="icon2" />
                </td>
                <td className="text-center">
                  <img src={icon3} alt="icon3" />
                </td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-left MemberTable__position">-</td>
                <td className="text-right">2007-03-06</td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="MemberTable__offline d-inline-block mr-1"></div>
                  offline
                </th>
                <td className="MemberTable__name">build</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-left MemberTable__position">
                  Just cannot stay away
                </td>
                <td className="text-right">2007-03-06</td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="MemberTable__offline d-inline-block mr-1"></div>
                  offline
                </th>
                <td className="MemberTable__name">bushmakin</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-left MemberTable__position">-</td>
                <td className="text-right">2007-03-06</td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="MemberTable__offline d-inline-block mr-1"></div>
                  offline
                </th>
                <td className="MemberTable__name">Clyde Dickens</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-left MemberTable__position">
                  Just cannot stay away
                </td>
                <td className="text-right">2007-03-06</td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="MemberTable__offline d-inline-block mr-1"></div>
                  offline
                </th>
                <td className="MemberTable__name">bameshops170</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-left MemberTable__position">
                  Just cannot stay away
                </td>
                <td className="text-right">2007-03-06</td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="MemberTable__offline d-inline-block mr-1"></div>
                  offline
                </th>
                <td className="MemberTable__name">build</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-center">-</td>
                <td className="text-left MemberTable__position">
                  Just cannot stay away
                </td>
                <td className="text-right">2007-03-06</td>
              </tr>
            </tbody>
          </Table>
        ) : (
          <>
            <div className="MemberTable__mobile">
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">
                    STATUS{" "}
                    <i className="fa fa-sort-desc ml-2" aria-hidden="true"></i>
                  </h6>
                </div>
                <div>
                  <div className="MemberTable__online d-inline-block mr-1"></div>
                  online
                </div>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">USERNAME </h6>
                </div>
                <div className="valueText">
                  <Link to="#">bushmakin</Link>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="italic text-center">
                  EMAIL<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  WEBSITE<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  ICQ<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  AIM<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  YIM<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  MSN<h5>-</h5>
                </h6>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">POSITION </h6>
                </div>
                <div className="valueText">
                  <h6>JUST can't stay way</h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">DATE REGISTER </h6>
                </div>
                <div className="valueText">
                  <h6>2007-07-06</h6>
                </div>
              </div>
            </div>
            <div className="MemberTable__mobile">
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">
                    STATUS{" "}
                    <i className="fa fa-sort-desc ml-2" aria-hidden="true"></i>
                  </h6>
                </div>
                <div>
                  <div className="MemberTable__online d-inline-block mr-1"></div>
                  online
                </div>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">USERNAME </h6>
                </div>
                <div className="valueText">
                  <Link to="#">bushmakin</Link>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="italic text-center">
                  EMAIL<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  WEBSITE<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  ICQ<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  AIM<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  YIM<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  MSN<h5>-</h5>
                </h6>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">POSITION </h6>
                </div>
                <div className="valueText">
                  <h6>JUST can't stay way</h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">DATE REGISTER </h6>
                </div>
                <div className="valueText">
                  <h6>2007-07-06</h6>
                </div>
              </div>
            </div>
            <div className="MemberTable__mobile">
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">
                    STATUS{" "}
                    <i className="fa fa-sort-desc ml-2" aria-hidden="true"></i>
                  </h6>
                </div>
                <div>
                  <div className="MemberTable__online d-inline-block mr-1"></div>
                  online
                </div>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">USERNAME </h6>
                </div>
                <div className="valueText">
                  <Link to="#">bushmakin</Link>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="italic text-center">
                  EMAIL<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  WEBSITE<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  ICQ<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  AIM<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  YIM<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  MSN<h5>-</h5>
                </h6>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">POSITION </h6>
                </div>
                <div className="valueText">
                  <h6>JUST can't stay way</h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">DATE REGISTER </h6>
                </div>
                <div className="valueText">
                  <h6>2007-07-06</h6>
                </div>
              </div>
            </div>
            <div className="MemberTable__mobile">
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">
                    STATUS{" "}
                    <i className="fa fa-sort-desc ml-2" aria-hidden="true"></i>
                  </h6>
                </div>
                <div>
                  <div className="MemberTable__online d-inline-block mr-1"></div>
                  online
                </div>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">USERNAME </h6>
                </div>
                <div className="valueText">
                  <Link to="#">bushmakin</Link>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="italic text-center">
                  EMAIL<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  WEBSITE<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  ICQ<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  AIM<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  YIM<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  MSN<h5>-</h5>
                </h6>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">POSITION </h6>
                </div>
                <div className="valueText">
                  <h6>JUST can't stay way</h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">DATE REGISTER </h6>
                </div>
                <div className="valueText">
                  <h6>2007-07-06</h6>
                </div>
              </div>
            </div>
            <div className="MemberTable__mobile">
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">
                    STATUS{" "}
                    <i className="fa fa-sort-desc ml-2" aria-hidden="true"></i>
                  </h6>
                </div>
                <div>
                  <div className="MemberTable__online d-inline-block mr-1"></div>
                  online
                </div>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">USERNAME </h6>
                </div>
                <div className="valueText">
                  <Link to="#">bushmakin</Link>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="italic text-center">
                  EMAIL<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  WEBSITE<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  ICQ<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  AIM<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  YIM<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  MSN<h5>-</h5>
                </h6>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">POSITION </h6>
                </div>
                <div className="valueText">
                  <h6>JUST can't stay way</h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">DATE REGISTER </h6>
                </div>
                <div className="valueText">
                  <h6>2007-07-06</h6>
                </div>
              </div>
            </div>
            <div className="MemberTable__mobile">
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">
                    STATUS{" "}
                    <i className="fa fa-sort-desc ml-2" aria-hidden="true"></i>
                  </h6>
                </div>
                <div>
                  <div className="MemberTable__online d-inline-block mr-1"></div>
                  online
                </div>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">USERNAME </h6>
                </div>
                <div className="valueText">
                  <Link to="#">bushmakin</Link>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="italic text-center">
                  EMAIL<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  WEBSITE<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  ICQ<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  AIM<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  YIM<h5>-</h5>
                </h6>
                <h6 className="italic text-center">
                  MSN<h5>-</h5>
                </h6>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">POSITION </h6>
                </div>
                <div className="valueText">
                  <h6>JUST can't stay way</h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="labelText">
                  <h6 className="italic">DATE REGISTER </h6>
                </div>
                <div className="valueText">
                  <h6>2007-07-06</h6>
                </div>
              </div>
            </div>
          </>
        )}
      </Col>
    </Row>
  );
};

export default MemberTable;
