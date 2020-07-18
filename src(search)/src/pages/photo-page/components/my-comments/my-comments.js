import React from "react";
import PropTypes from 'prop-types'
import './my-comments.sass'
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import MyCommentsTable from "../../../../components/common/table/my-comments-table/my-comments-table";
import Pagintation from "../../../profile-page/components/posts/pagination/pagination";

const MyComments = ({tableParameters}) => {

    return (
        <div className={'my-comments'}>
            <Typography firstText={'My'} secondText={'comments'} />
            <div className={'my-comments__info'}>
                <p className={'my-comments__info__text'}>You have made <span>(320)</span> comments in total</p>
            </div>
            <Paper className={'my-comments__paper'}>
                <MyCommentsTable tableParameters={tableParameters}/>
                <Pagintation totalPages={1132} />
            </Paper>
        </div>
    )
};

MyComments.propTypes = {
    tableParameters: PropTypes.object
};

export default MyComments
