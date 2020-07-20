import React from "react";
import PropTypes from 'prop-types'
import './comments-to-me.sass'
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
// import Pagintation from "../../../profile-page/components/posts/pagination/pagination";
import CommentsToMeTable from "../../../../components/common/table/comments-to-me-table/comments-to-me-table";
import Upload_Table from "../component/upload-table";
import { useMediaQuery } from "react-responsive";
import Comment from "../../../../components/common/table/my-comments-table/comment/comment";

const CommentsToMe = ({tableParameters}) => {

    const isMobile = useMediaQuery({ maxWidth: 960 });

    return (
        <div className={'comments-to-me'}>
            <Typography firstText={'Comments'} secondText={'to me'} />
            <div className={'comments-to-me__info'}>
                <p className={'comments-to-me__info__text'}>You have <span>(4)</span> comments in total</p>
            </div>
            <Paper className={'comments-to-me__paper'}>
                {!isMobile ? (
                    <CommentsToMeTable tableParameters={tableParameters}/>
                ) : (
                    <>
                    {
                        tableParameters.body.map((b, inbox) => (
                            <Upload_Table 
                            key = {inbox}
                            table_th_1 = "PHOTO NAME"
                            table_td_1={b.name}
                            table_th_2="COMMENT"
                            table_td_2={ <Comment 
                                comment={b.comment} />}
                            table_th_3="COMMENT MADE BY"
                            table_td_3={b.by}
                            table_th_4="COMMENT ADDED"
                            table_td_4={b.date}
                            />
                        ))
                    }
                    </>
                )}
                {/* <Pagintation totalPages={1132} /> */}
            </Paper>
        </div>
    )
};

CommentsToMe.propTypes = {
    tableParameters: PropTypes.object
};


export default CommentsToMe

