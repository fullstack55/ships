import React from "react";
import "./inbox-table.sass";
import Checkbox from "../../../../../components/common/checkbox/checkbox";

const InboxTable = ({date, subject, states, emaildata}) => (
    <div className="inbox__table">
        <div className="inbox__table__mobile">
            <p className="italic">
                <h6>SELECT</h6>
                <h5><Checkbox /></h5>
            </p>
            <p className="italic">
                <h6>DATE<span>▾</span></h6>
                <h5>{date}</h5>
            </p>
            <p className="italic">
                <h6>SUBJECT</h6>
                <h5>{subject}</h5>
            </p>
            <p className="italic">
                <h6>{states}</h6>
                <h5>{emaildata}</h5>
            </p>
        </div>
    </div>
);

export default InboxTable;
