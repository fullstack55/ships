import React from "react";
import "./inbox-table.sass";
import Checkbox from "../../../../../components/common/checkbox/checkbox";

const InboxTable = () => (
    <div className="inbox__table">
        <div className="inbox__table__mobile">
            <div className="d-flex justify-content-between">
                <p className="italic">
                    <h6>SELECT</h6>
                    <h5><Checkbox /></h5>
                </p>
                <p className="italic">
                    <h6>Date<span>▾</span></h6>
                    <h5></h5>
                </p>
                <p className="italic">
                    <h6>SUBJECT</h6>
                    <h5>-</h5>
                </p>
                <p className="italic">
                    <h6>FROM</h6>
                    <h5>-</h5>
                </p>
            </div>
        </div>
    </div>
);

export default InboxTable;
