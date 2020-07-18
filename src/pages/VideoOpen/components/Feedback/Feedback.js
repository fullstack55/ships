import React from "react";

import "./Feedback.sass";

const Feedback = ({ icon, name, className }) => {
  return (
    <div className={`${className} Feedback`}>
      {icon}
      <h6 className="ml-3">{name}</h6>
    </div>
  );
};

export default Feedback;
