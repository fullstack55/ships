import React from "react";
import PropTypes from 'prop-types'
import './my-comments.sass'
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import MyCommentsTable from "../../../../components/common/table/my-comments-table/my-comments-table";
import Pagintation from "../../../profile-page/components/posts/pagination/pagination";
import Upload_Table from "../component/upload-table";
import { useMediaQuery } from "react-responsive";
import Comment from "../../../../components/common/table/my-comments-table/comment/comment";

const MyComments = ({tableParameters}) => {
    const isMobile = useMediaQuery({ maxWidth: 960 });

    return (
        <div className={'my-comments'}>
            <Typography firstText={'My'} secondText={'comments'} />
            <div className={'my-comments__info'}>
                <p className={'my-comments__info__text'}>You have made <span>(320)</span> comments in total</p>
            </div>
            <Paper className={'my-comments__paper'}>
                {!isMobile ? (
                    <MyCommentsTable tableParameters={tableParameters}/>
                ) : (
                    <>
                    {
                        tableParameters.body.map((b, inbox) => (
                            <Upload_Table 
                            key = {inbox}
                            table_th_1 = "PHOTO NAME"
                            table_td_1={b.name}
                            table_th_2="PHOTO BY"
                            table_td_2={b.by}
                            table_th_3="MY COMMENT"
                            table_td_3={ <Comment 
                                comment={b.comment} />}
                            table_th_4="NEW REPLIES"
                            table_td_4={b.replies}
                            table_th_5="COMMENT ADDED"
                            table_td_5={b.date}
                            />
                        ))
                    }
                    </>
                )}
                <Pagintation totalPages={1132} />
            </Paper>
        </div>
    )
};

MyComments.propTypes = {
    tableParameters: PropTypes.object
};

export default MyComments
