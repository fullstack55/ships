import React from "react";
import "./buddies-table.sass";
const BuddiesTable = ({name}) => (
  <div className="buddies__table">
    <div className="buddies__table__name">
        <span className="buddies__table__span">NAME</span>
        <p>{name}</p>
    </div>
    <div className="buddies__table__properties">
        <div>
            <span className="buddies__table__span">STATUS</span>
            <div><button className="buddies__status" /></div>
        </div>
        <div>
            <span className="buddies__table__span">EMAIL</span>
            <div><button className="buddies__mail" /></div>
        </div>
        <div>
            <span className="buddies__table__span">ICQ</span>
            <p>-</p>
        </div>
        <div>
            <span className="buddies__table__span">AIM</span>
            <p>-</p>
        </div>
        <div>
            <span className="buddies__table__span">YIM</span>
            <p>-</p>
        </div>
        <div>
            <span className="buddies__table__span">MSN</span>
            <p>-</p>
        </div>
    </div>
    <div className="buddies__table__remove">
        <span className="buddies__table__span">REMOVE</span>
        <button className="buddies__remove" />
    </div>
  </div>
);

export default BuddiesTable;
