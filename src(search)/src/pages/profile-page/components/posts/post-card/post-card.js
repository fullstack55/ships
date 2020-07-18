import React, {useState} from 'react';
import PropTypes from "prop-types";
import './post-card.sass';


const PostCard = ({id, heading, text, timePosted}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen)
    };

    return(
        <div className={'post-card'}>
            <div className={'post-card__heading'}>
                <span>{id}</span>
                <div className={'heading-shortLinks'}>
                    <div>
                        <span>Shipsposters all over the world</span>
                        <span>&#8226;</span>
                        <span>Site related news, functions and modules</span>
                    </div>
                    <a>{heading}</a>
                </div>
            </div>
            <div className={'post-card__body'}>
                {!isOpen ? text.substr(0,210) + '...' : text}
                <div onClick={toggle}>
                    <span>[</span>
                    <span>View all text</span>
                    <span>]</span>
                </div>
            </div>
            <div className={'post-card__footer'}>
                <span>{timePosted}</span>
                <div>
                    <span>remove</span>
                    <span>reply</span>
                    <span>quote</span>
                    <span>notify</span>
                </div>
            </div>
        </div>
    )

};

PostCard.propTypes = {
    id: PropTypes.number,
    heading: PropTypes.string,
    text: PropTypes.string,
    timePosted: PropTypes.string,
};

export default PostCard;
