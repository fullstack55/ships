import React from "react";
import "./small-card.sass";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "../../../components/common/typography/typography";

const SmallCard = ({ title, links }) => {
  return (
    <div className={"small-card"}>
      <div className={"small-card__header"}>
        <Typography
          firstText={title}
          before
          className={"small-card__header__typography"}
        />
      </div>
      <div className={"small-card__link-container"}>
        {links.map((link, index) => (
          <Link to="/support/1234567890" key={index}>
            <span> {link}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

SmallCard.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
};

export default SmallCard;
