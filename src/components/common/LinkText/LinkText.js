import React from "react";

import { Link } from "react-router-dom";

const LinkText = ({ url = "#", children }) => {
  return <Link to={url}>{children}</Link>;
};

export default LinkText;
