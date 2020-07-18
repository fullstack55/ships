import React from "react";
import './inbox-row.sass';
import Checkbox from "../../../../../components/common/checkbox/checkbox";
import PropTypes from "prop-types";


const InboxRow = ({date, subject, from, heading}) => {
    return (
        <div className={'inbox-row'}>
            <div className={'inbox-row__row'}>
                <Checkbox />
                <p className={heading ? 'inbox-row__heading-date inbox-row__heading' : 'inbox-row__date'}>
                    {heading ? <>Date <span>&#9662;</span></> : date}</p>
                <p className={heading ? 'inbox-row__heading-subject inbox-row__heading' : 'inbox-row__subject'}>
                    {heading ? 'Subject' : subject}</p>
                <p className={heading ? 'inbox-row__heading-from inbox-row__heading' : 'inbox-row__from'}>
                    {heading ? 'From' : from}</p>
            </div>
        </div>
    )
};

InboxRow.propTypes = {
    heading: PropTypes.bool,
    subject: PropTypes.string,
    from: PropTypes.string,
    date: PropTypes.string,
};

export default InboxRow
