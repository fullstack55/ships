import React from "react";
import "./buddies-table.sass";
import { Link } from "react-router-dom";

const BuddiesTable = ({name}) => (
    <div className="buddies__table">
        <div className="buddies__table__mobile">
            <div className="d-flex">
                <div className="labelText">
                    <h6 className="italic">USERNAME </h6>
                </div>
                <div className="valueText">
                    <Link to="#">{name}</Link>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <p className="italic text-center">
                    <h6>STATUS</h6>
                    <h5><button className="buddies__status" /></h5>
                </p>
                
                
                <p className="italic text-center">
                    <h6>EMAIL</h6>
                    <h5><button className="buddies__mail" /></h5>
                </p>
                <p className="italic text-center">
                    <h6>ICQ</h6>
                    <h5>-</h5>
                </p>
                <p className="italic text-center">
                    <h6>AIM</h6>
                    <h5>-</h5>
                </p>
                <p className="italic text-center">
                    <h6>YIM</h6>
                    <h5>-</h5>
                </p>
                <p className="italic text-center">
                    <h6>MSN</h6>
                    <h5>-</h5>
                </p>
            </div>
            <div className="d-flex">
                <div className="labelText">
                    <h6 className="italic">REMOVE </h6>
                </div>
                <div className="valueText">
                    <button className="buddies__remove" />
                </div>
            </div>
        </div>
    </div>
);

export default BuddiesTable;
