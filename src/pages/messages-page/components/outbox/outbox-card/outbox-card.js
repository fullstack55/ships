import React, {useState} from "react";
import PropTypes from "prop-types";
import './outbox-card.sass'
import Checkbox from "../../../../../components/common/checkbox/checkbox";

const OutboxCard = ({text, heading, subject, to, timeSent, actions, leftActions}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return(
        <div className={'outbox-card'}>
            <div className={'outbox-card__heading'}>
                <Checkbox />
                <div className={'heading-shortLinks'}>
                    <p>{heading}</p>
                    <div>
                        <span>Just popping in</span>
                        <span>&#8226;</span>
                        <span>Posts: 4</span>
                    </div>
                </div>
                <div className={'outbox-card__heading__drop-down'}>
                    <p>Long label text for website redesign </p>
                    <span />
                </div>
            </div>
            <div className={'outbox-card__body'}>
                <div className={'outbox-card__body__mail-info'}>
                    <p>{subject}</p>
                    <p>« Sent to: <span>{to}</span> on: {timeSent} »</p>
                </div>
                {!isOpen ? text.substr(0,210) + '...' : text}
                <div className={'outbox-card__body__pop-text'} onClick={toggle}>
                    <span>[</span>
                    <span>View all text</span>
                    <span>]</span>
                </div>
            </div>
            <div className={'outbox-card__footer'}>
                {leftActions ? <div className={'outbox-card__footer__left-actions'}>
                    <span>
                        Send Message
                    </span>
                    <span>
                        View Profile
                    </span>
                </div> : <div />}

                <div className={'outbox-card__footer__actions'}>
                    <span>Remove</span>
                    <span>Reply</span>
                    <span>Quote</span>
                    {actions === 4 ? <span>Report To Admin</span> : null}

                </div>
            </div>
        </div>
    )
};


OutboxCard.propTypes = {
    heading: PropTypes.string,
    text: PropTypes.string,
    subject: PropTypes.string,
    to: PropTypes.string,
    timeSent: PropTypes.string,
    actions: PropTypes.number,
    leftActions: PropTypes.bool
};

export default OutboxCard
