import React from "react";
import "./upload-table.sass";
import edit from '../../../../../assets/images/desktop/photo/Vector Smart Object.svg'

const Upload_Table = ({photo_name, imo, upload_date, location}) => (
    <div className="upload__table">
        <div className="upload__table__mobile">
            <p className="italic">
                <h6>PHOTO NAME</h6>
                <h5>{photo_name}</h5>
            </p>
            <p className="italic">
                <h6>IMO</h6>
                <h5>{imo}</h5>
            </p>
            <p className="italic">
                <h6>UPLOAD DATE</h6>
                <h5>{upload_date}</h5>
            </p>
            <p className="italic">
                <h6>LOCATION</h6>
                <h5>{location}</h5>
            </p>
            
            <p className="italic">
                <h6>EDIT</h6>
                <h5><img src={edit} alt="edit"/></h5>
            </p>
        </div>
    </div>
);

export default Upload_Table;
