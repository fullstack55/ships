import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import "./videoCard.sass";
import play from "../../../assets/images/desktop/videos/Play.svg";

const VideoCard = ({ name, url, info: { uploadedDate, view, uploadedBy } }) => {
  return (
    <Link to="/videos/1234567890">
      <div className="video-card">
        <div
          style={{ backgroundImage: `url(${url})` }}
          className="video-card__ship-video"
        >
          <div className="video-card__ship-video__play">
            <img src={play} alt="play" />
          </div>
        </div>

        <div className="video-card__ship-info">
          {name ? <p className="custom-style">{name}</p> : null}
          {uploadedDate ? (
            <p>
              Date of uploaded: <span>{uploadedDate}</span>
            </p>
          ) : null}
          {view ? (
            <p>
              View: <span>{view}</span>
            </p>
          ) : null}
          {uploadedBy ? (
            <p>
              Uploaded by: <span>{uploadedBy}</span>
            </p>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

VideoCard.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  info: PropTypes.object,
};
export default VideoCard;
