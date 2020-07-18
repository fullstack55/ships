import React from "react";

const Quote = ({ data }) => {
  return (
    <div className="mt-3 mb-3">
      <h6 className="TopicBody__quote__title">Quote</h6>
      <h6 className="TopicBody__quote__content mt-3">{data}</h6>
    </div>
  );
};

export default Quote;
