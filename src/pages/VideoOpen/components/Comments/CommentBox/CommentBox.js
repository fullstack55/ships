/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useMediaQuery } from "react-responsive";
import "./CommentBox.sass";
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 589 });
  return isMobile ? children : null;
};

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 590 });
  return isNotMobile ? children : null;
};
const CommentBox = ({ picture, name, date, comment, subComment }) => {
  return (
    <>
      <div
        className={`d-sm-flex align-items-sm-start CommentBox mt-5 ${
          subComment && "CommentBox__subcomment"
        }`}
      >
        <div className="CommentBox__person">
          <div className="CommentBox__personimage">
            <img
              src={picture}
              alt={"person"}
              className="CommentBox__personimage__img"
            />
          </div>
          <Mobile>
            <div className="ml-2">
              <h6 className="CommentBox__container__name">{name}</h6>
              <h6 className="CommentBox__container__date">{date}</h6>
            </div>
          </Mobile>
        </div>
        <div className="CommentBox__container ml-sm-4">
          <Default>
            {
              <div className="d-md-flex align-items-md-center justify-content-start">
                <h6 className="CommentBox__container__name">{name}</h6>
                <h6 className="CommentBox__container__date ml-md-1">{date}</h6>
              </div>
            }
          </Default>
          <div className="CommentBox__container__text text-left mt-3">
            {comment}
          </div>
          <div className="mt-3">
            <button>Reply</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentBox;
