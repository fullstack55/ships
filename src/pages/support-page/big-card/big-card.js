import React from "react";
import "./big-card.sass";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "../../../components/common/typography/typography";

const BigCard = ({ title, text, links }) => {
  return (
    <div className={"big-card"}>
      <div className={"big-card__header"}>
        <Typography
          firstText={title}
          secondText={text}
          before
          className={"big-card__header__typography"}
        />
      </div>
      <div className={"big-card__body"}>
        {links.map((column, index) => (
          <div key={index} className={"big-card__body__link-container"}>
            {column.map((link, index) => (
              <Link to="/support/1234567890" key={index}>
                <span>{link}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

BigCard.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
  text: PropTypes.string,
};

export default BigCard;
