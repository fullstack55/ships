import React from 'react'
import PropTypes from 'prop-types'
import './../my-comments-table/my-comments-table.sass'
import './../deletedTable/deletedTable.sass'
import TableHeader from "../table-header/table-header";
import Comment from "../my-comments-table/comment/comment";
import Divider from "@material-ui/core/Divider";



const CommentsToMeTable = ({tableParameters}) => {

    return (
        <React.Fragment>
            <table cellSpacing={10} className={'my-comments-table'}>
                <TableHeader tableHeaders={tableParameters.headers} />
                <tbody className={'my-comments-table__body'}>
                {
                    tableParameters.body.map((b, index) => (
                        <React.Fragment key={index}>
                            <tr key={index}>
                                <td className={'my-comments-table__body__name'}>{b.name}
                                    <Divider className={'divider'} orientation={'horizontal'}/>
                                </td>

                                <td className={'my-comments-table__body__comment'}>
                                    <Comment comment={b.comment} />
                                    <Divider className={'divider'} orientation={'horizontal'}/>
                                </td>
                                <td className={'my-comments-table__body__by'}>{b.by}
                                    <Divider className={'divider'} orientation={'horizontal'}/>
                                </td>
                                <td className={'my-comments-table__body__date'}>{b.date}
                                    <span className={'my-comments-table__body__date__time'}>(18 minutes ago)</span>
                                    <Divider className={'divider'} orientation={'horizontal'}/>
                                </td>
                            </tr>
                        </React.Fragment>
                    ))
                }
                </tbody>
            </table>
        </React.Fragment>
    )
};

CommentsToMeTable.propTypes = {
    tableParameters: PropTypes.object
};

export default CommentsToMeTable
