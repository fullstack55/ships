import React from "react";

const ContentHeader = ({ contentHeader, createdDate }) => {
  return (
    <div>
      <h6 className="TopicBody__header">{contentHeader}</h6>
      <h6 className="TopicBody__createdDate">{createdDate}</h6>
    </div>
  );
};

export default ContentHeader;
