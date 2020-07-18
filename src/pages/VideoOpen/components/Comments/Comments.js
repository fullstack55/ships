import React from "react";
import { Row, Col } from "reactstrap";
import PageTitle from "../../../../components/common/page-title/page-title";
import BasicSelect from "../../../../components/common/BasicSelect";
import CommentBox from "./CommentBox";
import "./Comments.sass";

import p1 from "../../../../assets/images/desktop/comment/p1.png";
import p2 from "../../../../assets/images/desktop/comment/p2.png";
import p3 from "../../../../assets/images/desktop/comment/p3.png";
import p4 from "../../../../assets/images/desktop/comment/p4.png";

const options = [
  {
    value: "Newest First",
    label: "Newst First",
  },
];

const Comments = () => {
  return (
    <div className="Comments">
      <PageTitle
        main={"COMMENT"}
        secondary={"THIS VIDEO"}
        subText={"(5)"}
        className={"VideoOpen__title"}
      />
      <div className=" Comments__select mt-4">
        <h6 className="text-center mr-4">Comments sorting method: </h6>
        <BasicSelect
          defaultValue={options[0]}
          className=" mr-2"
          options={options}
        />
      </div>
      <Row>
        <Col className="Comments__box">
          <CommentBox
            picture={p1}
            name="José Ricardo Rodriguez Montero"
            date="Dec 10, 2019 16:30 (2 month ago)"
            comment="Yes it is csaba...You would have to venture fair distance into Burrard Inlet. If you took #4 Powell bus on W Cordova St (across the street from Waterfront Station) it would take about 30 minutes to get to the corner McGill St & N Renfrew St. Then it's about a 10 minute walk down the hill to the park (Just beyond the park is the 2nd Narrows Bridge)."
          />
          <CommentBox
            picture={p2}
            name="Victor radio74"
            date="Dec 10, 2019 00:10 (2 months ago)"
            comment="Thanks, Michael. And the part of her hull without obvious vertical section joint lines was brought from China, where she was assembled, to speed up the hull assembly process at the yard.
            Victor"
          />
          <CommentBox
            picture={p1}
            name="José Ricardo Rodriguez Montero"
            date="Dec 10, 2019 16:30 (2 month ago)"
            comment="@victor radio74 Big like Victor, always interesting to see the vessels in an earlier stage of construction with hull sections still discernible."
            subComment
          />
          <CommentBox
            picture={p3}
            name="ChasB46"
            date="Dec 10, 2019 16:30 (2 month ago)"
            comment="Still aground (9 Dec 23.00)"
          />
          <CommentBox
            picture={p4}
            name="José Ricardo Rodriguez Montero"
            date="Dec 10, 2019 16:30 (2 month ago)"
            comment="Second try at 01:00utc failure as well. Next try Sunday at 13:23utc. Bregards"
          />
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h6 className="Comments__footer text-center">
            If you want to report errors - CLICK HERE instead of posting a
            comment!
          </h6>
        </Col>
      </Row>
    </div>
  );
};

export default Comments;
