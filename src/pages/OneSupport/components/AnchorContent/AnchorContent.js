import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Typography from "../../../../components/common/typography/typography";

import "./AnchorContent.sass";
const AnchorContent = ({ id, mainTitle, subTitle, content }) => {
  return (
    <>
      <ScrollableAnchor id={id}>
        <div className="AnchorContent mt-5">
          <Typography firstText={mainTitle} secondText={subTitle} />
          <div className="mt-4">{content}</div>
          <h6 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            [back to top]
          </h6>
        </div>
      </ScrollableAnchor>
    </>
  );
};

export default AnchorContent;
