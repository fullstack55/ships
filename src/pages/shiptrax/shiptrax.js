import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/common/footer/footer";
import Title from "../../components/common/title/title";
import Button from "../../components/common/button/button";
import HeadImage from "../../assets/images/desktop/shiptrax/head-image.png";
import Icon1 from "../../assets/images/desktop/shiptrax/icon1.png";
import Icon2 from "../../assets/images/desktop/shiptrax/icon2.png";
import Icon3 from "../../assets/images/desktop/shiptrax/icon3.png";
import Icon4 from "../../assets/images/desktop/shiptrax/icon4.png";
import Icon5 from "../../assets/images/desktop/shiptrax/icon5.png";
import Icon6 from "../../assets/images/desktop/shiptrax/icon6.png";
import Icon7 from "../../assets/images/desktop/shiptrax/icon7.png";
import Image1 from "../../assets/images/desktop/shiptrax/image1.png";
import Image2 from "../../assets/images/desktop/shiptrax/image2.png";
import "./shiptrax.sass";
import Card from "./components/card";
import BlueCard from "./components/blue-card";

// eslint-disable-next-line react/prop-types
const List = ({ redIcons }) => (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <ol className="blue-card-content">
      <li>Track ships in real-time</li>
      <li>Ship Name, Type, IMO/ MMSI / Callsign data</li>
      <li>Ship Navigation data: speed, track destination</li>
      <li>
        Able to get data from an AIS receiver, TCP/IP connection and various AIS
        networks
      </li>
      <li>See what other ShipTrax users receive in real-time</li>
      <li>Based on the award winning 3D multi-window map interface</li>
      <li>Real-Time photos of all tracked ships</li>
      <li>Generate and share reports automatically</li>
      <li>Share screen shots with your friends</li>
    </ol>
    <div className="blue-card-content">
      <ol>
        <li>
          MyLog: log all and share with your friends all the ships you receive
        </li>
        <li>Alert generation for specific ships</li>
        <li>Recorder/player to review navigation recordings</li>
        <li>Advanced Filters</li>
        <li>SmartView / Fleet Monitoring option</li>
        <li>Automatic detection of user location</li>
        <li>Real-Time AIS decoder hardware (optional)</li>
        <li>
          Easy plug & play USB connection, no complex time consuming setup
        </li>
      </ol>
      <ol id={redIcons && "red-icons"}>
        <li>Fully integrated 3D Ship Tracking</li>
        <li>Embedded application Google Earth Interface</li>
      </ol>
    </div>
  </div>
);

const Shiptrax = () => (
  <>
    <Header info={false} />
    <Title boldText="SHIPTRAX" />
    <div className="shiptrax-head-container">
      <div className="shiptrax-head-container-left">
        <img className="shiptrax-head-container-left-head" src={HeadImage} />
        <div>
          <Button
            variant="secondary"
            className="shiptrax-head-container-left-button"
          >
            vizit radarbox24.com
          </Button>
          <div className="shiptrax-head-container-left-link">
            AIS Receivers Compared
          </div>
          <div className="shiptrax-head-container-left-download">
            Download a Free ShipTrax Trial Now (55 Mb) - Available when released
          </div>
        </div>
      </div>
      <div className="shiptrax-head-container-right">
        <div className="shiptrax-head-container-right-first-p">
          <span>AirNav ShipTrax</span> is the most advanced Windows based Ship
          Tracking application. By receiving ship data from various sources
          (AIS, TCP/IP, AIS Networks) you will be able to track ships all over
          the world in real-time. T product is something never seen in the
          marine community and results from a 15 year experience in the
          development of high-tech award winning aviation solutions.
        </div>
        <div className="shiptrax-head-container-right-second-p">
          Details shown include Ship Name, Position, Photo, Navigation data
          (location, speed, track), IMO/MMSI/Callsign, Ship Type and dimensions.
          The MyLog feature maintains a database of all received ships, last
          known position and voyage details.
        </div>
        <Title
          boldText="WHY"
          regularText="SHIPTRAX?"
          style={{
            fontSize: "30px",
            color: "#0f2153",
            marginBottom: "29px",
          }}
        />
        <div className="shiptrax-head-container-right-list">
          <ol>
            <li>
              <span>Full featured software included.</span> No third-party
              software or apps with hidden costs required. All-in-one package.
            </li>
            <li>
              <span>Network</span> your station with others
            </li>
            <li>
              The only AIS Receiver with USB + Serial + Ethernet simultaneous
              output.
            </li>
            <li>See local and network traffic in Real-Time</li>
          </ol>
          <ol start="5">
            <li>
              <span>Continuous</span> software updates
            </li>
            <li>
              <span>Professional</span> email and forum support
            </li>
            <li>Extensive ship and port database</li>
            <li>
              Software <span>100% compatible</span> with any other AIS receiver
              or TCP-IP feed.
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div className="shiptrax-cards-container">
      <div>
        <Card titleBold="How" titleRegular="it works" icon={Icon1}>
          <ol>
            <li>
              Connect the AirNav ShipTrax receiver to your computer using the
              USB cable provided. It is also possible to connect using an
              Ethernet port (to your router) or using a serial cable.
            </li>
            <li>Install the software from the CD</li>
            <li>Start Tracking ships in real-time!</li>
          </ol>
        </Card>
        <Card titleBold="Read" titleRegular="Magazine Reviews" icon={Icon2}>
          ShipTrax has just been released. We will publish here links on major
          magazines once they become available.
        </Card>
      </div>
      <div>
        <Card titleBold="Requirements" icon={Icon3}>
          Microsoft Windows, any version. Internet Connection for Network
          feature.
        </Card>
        <Card titleBold="Interesting" titleRegular="Forum Posts" icon={Icon4}>
          <div>
            <span>
              <a>AirNav Systems Forum</a>
            </span>{" "}
            is one of the world&apos;s biggest and most important Ship
            Enthusiasts Community.
          </div>
          <div>A selection of some interesting posts:</div>
          <div>
            <a>Documentation and Support</a>
          </div>
          <div>
            <a>Visit ShipSpotting.com</a>
          </div>
        </Card>
      </div>
      <div>
        <Card titleBold="Shiptrax" titleRegular="Network" icon={Icon5}>
          <div>
            ShipTrax Network is a complete worldwide ship data bank with
            detailed information of on over 10 thousand ships worldwide.
            <p>
              This information includes ship position, destination port and
              arrival time, ship dimensions and ship photo.
            </p>
          </div>
          <div>
            <a>Check Real-Time Network Locations</a>
          </div>
        </Card>
        <Card titleBold="More" titleRegular="Links and Sites" icon={Icon6}>
          <div>
            <a>AirNav ShipTrax FAQ</a>
          </div>
          <div>
            <a>AirNav ShipTrax Major Announcements</a>
          </div>
        </Card>
      </div>
      <div>
        <Card titleBold="Want" titleRegular="to be a dealer?" icon={Icon7}>
          <div>Start selling AirNav RadarBox on your site or shop today.</div>
          <div>
            <a>Contact us </a>
            <span>for more information.</span>
          </div>
          <div>
            <a>Dealer List</a>
          </div>
        </Card>
      </div>
    </div>
    <div className="blue-cards-container">
      <BlueCard boldTitle="ShipTrax" regularTitle="3D">
        <div>
          For the first time an AIS Receiver System integrates Real-Time and
          Networked Ship Tracking. Worldwide coverage.
        </div>
        <a>[ More ShipTrax 3D Screen Shots ]</a>
        <img src={Image1} />
      </BlueCard>
      <BlueCard boldTitle="ShipTrax" regularTitle="Pro">
        <div>
          For the first time an AIS Receiver System integrates Real-Time and
          Networked Ship Tracking. Worldwide coverage.
        </div>
        <a>[ More ShipTrax Pro Screen Shots ]</a>
        <img src={Image2} />
      </BlueCard>
      <BlueCard boldTitle="ShipTrax 3D" regularTitle="Major Features">
        <List />
      </BlueCard>
      <BlueCard boldTitle="ShipTrax Pro" regularTitle="Major Features">
        <List redIcons />
      </BlueCard>
    </div>
    <div className="info-resourses-container">
      <Title
        boldText="INFORMATION"
        regularText="RESOURSES AND DOCUMENTATION"
        style={{
          fontSize: "30px",
          color: "#0f2153",
          margin: "30px 10%",
          textAlign: "left",
        }}
      />
      <div className="info-resourses-container-text">
        <div>
          <strong>Forum:</strong> Join our Community and visit the{" "}
          <a>ShipTrax Forum</a> to learn more.
        </div>
        <div>
          <strong>Why ShipTrax:</strong> Deciding between ShipTrax or our
          competition? <a>Compare</a>
        </div>
        <div>
          <strong>Documentation and Video Support:</strong>{" "}
          <a>Download AirNav RadarBox Docs and Manuals</a>
        </div>
        <div>
          <strong>Access ShipTrax Help Online:</strong> <a>Online Help</a>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Shiptrax;
