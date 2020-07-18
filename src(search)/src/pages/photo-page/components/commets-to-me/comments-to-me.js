import React from "react";
import PropTypes from 'prop-types'
import './comments-to-me.sass'
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import Pagintation from "../../../profile-page/components/posts/pagination/pagination";
import CommentsToMeTable from "../../../../components/common/table/comments-to-me-table/comments-to-me-table";


const CommentsToMe = ({tableParameters}) => {


    return (
        <div className={'comments-to-me'}>
            <Typography firstText={'Comments'} secondText={'to me'} />
            <div className={'comments-to-me__info'}>
                <p className={'comments-to-me__info__text'}>You have <span>(4)</span> comments in total</p>
            </div>
            <Paper className={'comments-to-me__paper'}>
                <CommentsToMeTable tableParameters={tableParameters}/>
                <Pagintation totalPages={1132} />
            </Paper>
        </div>
    )
};

CommentsToMe.propTypes = {
    tableParameters: PropTypes.object
};


export default CommentsToMe
