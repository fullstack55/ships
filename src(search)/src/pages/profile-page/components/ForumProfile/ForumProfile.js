import React from "react";

import Typography from "../../../../components/common/typography/typography";
import InfoNote from "../../../../components/common/info-note/info-note";

import ProfileImage from "./components/ProfileImage";
import PersonalInfo from "./components/PersonalInfo";

import "./ForumProfile.sass";

const ForumProfile = () => {
  return (
    <div className="ForumProfile">
      <Typography
        className="mb-3"
        firstText={"Forum Profile"}
        secondText={"Information"}
      />
      <InfoNote
        text={
          "You can change your personal information on this page. This information will be displayed throughout ShipSpotting.com Forum. If you aren't comfortable with sharing some information, simply skip it - nothing here is required."
        }
      />
      <ProfileImage />
      <PersonalInfo />
    </div>
  );
};

export default ForumProfile;
