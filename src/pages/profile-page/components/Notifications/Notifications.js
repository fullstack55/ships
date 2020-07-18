import React from "react";

import Typography from "../../../../components/common/typography/typography";
import InfoNote from "../../../../components/common/info-note/info-note";
// import Paper from "../../../../components/common/paper/paper";
// import InputField from "../../../../components/common/input-field/input-field";
// import Select from "../../../../components/common/select-with-label/select-with-label";
// import Checkbox from "../../../../components/common/checkbox/checkbox";
// import BasicButton from "../../../../components/common/BasicButton";

import CurrentTopic from "./components/CurrentTopic";
import CurrentTopicTwo from "./components/CurrentTopicTwo";
import General from "./components/General";
import "./Notifications.sass";

const Notifications = () => {
  return (
    <div className="Notifications">
      <Typography
        className="mb-3"
        firstText={"Notifications"}
        secondText={"and Email"}
      />
      <InfoNote
        text={
          "SMF allows you to be notified of replies to posts, newly posted topics, and forum announcements, You can change those settings here, or oversee the topics and boards you are currently receiving notifications for."
        }
      />
      <General />
      <CurrentTopic />
      <CurrentTopicTwo />
    </div>
  );
};

export default Notifications;
