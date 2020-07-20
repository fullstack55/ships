import React from "react";
import "./upload-table.sass";

const Upload_Table = ({
    table_th_1,
    table_td_1,
    table_th_2,
    table_td_2,
    table_th_3,
    table_td_3,
    table_th_4,
    table_td_4,
    table_th_5,
    table_td_5
}) => (
    <div className="upload__table">
        <div className="upload__table__mobile">
            <p className="italic">
                <h6>{table_th_1}</h6>
                <h5>{table_td_1}</h5>
            </p>
            <p className="italic">
                <h6>{table_th_2}</h6>
                <h5>{table_td_2}</h5>
            </p>
            <p className="italic">
                <h6>{table_th_3}</h6>
                <h5>{table_td_3}</h5>
            </p>
            <p className="italic">
                <h6>{table_th_4}</h6>
                <h5>{table_td_4}</h5>
            </p>
            
            <p className="italic">
                <h6>{table_th_5}</h6>
                <h5>{table_td_5}</h5>
            </p>
        </div>
    </div>
);

export default Upload_Table;
