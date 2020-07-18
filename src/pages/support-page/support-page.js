import React from "react";
import Header from "../../components/header/header";
import PageTitle from "../../components/common/page-title/page-title";
import SearchField from "../../components/common/search-field/search-field";
import "./support-page.sass";
import CreateTicket from "./create-ticket/create-ticket";
import SmallCard from "./small-card/small-card";
import BigCard from "./big-card/big-card";
import Footer from "../../components/common/footer/footer";

const SupportPage = () => {
  return (
    <>
      <Header info={false} />
      <div className={"support"}>
        <PageTitle
          main={"Support and Frequently"}
          secondary={"Asked Questions"}
        />
        <SearchField label={"Quick search:"} placeholder={"Accommodation"} />
        <CreateTicket
          label={
            "If you did not find the answer to your question, create a new ticket"
          }
          cta={"Create a new ticket"}
          className={"support__create-ticket"}
        />
        <span className={"support__note"}>
          Note: Some items require editing as a consequence of the migration of
          the site. This is in progress. Site Standards have not changed.
        </span>
        <div className={"support__card-container"}>
          <SmallCard
            title={"General"}
            links={[
              "About ShipSpotting.com",
              "Code Of Conduct",
              "Centreport Empty Depot",
            ]}
          />
          <SmallCard
            title={"General"}
            links={[
              "Site Standards for All Photos",
              "How to Upload Photos",
              "Photo Manipulation",
              "Copyright",
            ]}
          />
          <SmallCard
            title={"General"}
            links={[
              "About these Using the site FAQs",
              "Identify yourself and Choose options",
              "Using the Forum and News tabs",
              "Viewing photos",
              "Communicating with other members",
            ]}
          />
          <SmallCard
            title={"General"}
            links={[
              "Adding and/or Editing FAQs",
              "Deletion Issues Member Contact",
              "For New Admins",
            ]}
          />
        </div>
        <BigCard
          title={"Category Site Standards and Guidance"}
          text={"– Additional to Site Standards for All Photos"}
          links={[
            [
              "Buoy/Lighthouse Maintenance Vessels",
              "Coast Guard Vessels",
              "Containerships",
              "Crane Ships and Floating Sheerlegs",
              "Differences Between RO/RO Ships and Ferries",
              "Ferries",
              "Fishing Vessels",
              "General Cargo Ships",
            ],
            [
              "Harbour Overview Images",
              "Inland Vessels",
              "Law Enforcement",
              "Military Ships",
              "Museum Ships",
              "Mystery Ships",
              "Palletised Cargo Ships",
              "Passenger Vessels",
            ],
            [
              "Pilot Vessels",
              "Research and Survey Vessels",
              "Sailing Vessels",
              "Ship Interior",
              "Shipping Company Funnel Markings/Superstructure\n" + "Logos",
              "Ships Under Construction",
              "Ships under Repair or Conversion",
            ],
            [
              "Ships' Lifeboats and Tenders",
              "Shipspotting Locations",
              "Tankers",
              "Training Ships",
              "Tugs with Tow",
              "Wrecks and Relics",
            ],
          ]}
        />
      </div>
      <Footer />
    </>
  );
};

export default SupportPage;
