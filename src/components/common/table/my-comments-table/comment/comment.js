import React, {useState} from "react";
import './comment.sass'
import PropTypes from 'prop-types'

const Comment = ({comment}) => {
    const [isOpened, setIsOpened] = useState(false);

    const toggle = () => {
      setIsOpened(!isOpened);
    };

    return (
        <React.Fragment>
            {
                !isOpened ?
                    <React.Fragment>
                        <span className={'comment-text'}>{comment.substr(0, 30) + '...'}</span>
                        <span className={'comment-toggle'} onClick={toggle}>
                            <span className={'comment-toggle__comment-brackets'}>[</span>
                            <span className={'comment-toggle__text'}>more</span>
                            <span className={'comment-toggle__comment-brackets'}>]</span>
                        </span>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <span className={'comment-text'}>{comment}</span>
                        <span className={'comment-toggle'} onClick={toggle}>
                            <span className={'comment-toggle__comment-brackets'}>[</span>
                            <span className={'comment-toggle__text'}>less</span>
                            <span className={'comment-toggle__comment-brackets'}>]</span>
                        </span>
                    </React.Fragment>
            }
        </React.Fragment>
    )
};

Comment.propTypes = {
    comment: PropTypes.string
};

export default Comment
