import React from 'react'
import PropTypes from 'prop-types'
import './deletedTable.sass'
import ship from '../../../../assets/images/desktop/photo/ship.png'
import TableHeader from "../table-header/table-header";
import Divider from "@material-ui/core/Divider";

const DeletedTable = ({tableParameters}) => {
  return (
    <React.Fragment>
      <table cellSpacing={10} className={'deleted-table'}>
        <TableHeader tableHeaders={tableParameters.headers} />
        <tbody className={'deleted-table__body'}>
        {
          tableParameters.body.map((b, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className={'deleted-table__body__td'}>
                  <img src={b.url || ship} alt="photo" width={50}/>
                  <div>
                    <span>ID: {b.photo.id}</span>
                    <span>view: <a href="#"> small</a> <a href="#"> little</a> <a href="#"> big</a></span>
                  </div>
                  <Divider className={'divider'} orientation={'horizontal'}/>
                </td>
                <td className={'deleted-table__body__td'}>
                  {b.deletedBy}
                  <Divider className={'divider'} orientation={'horizontal'}/>
                </td>
                <td className={'deleted-table__body__td'}>
                  {b.reason}
                  <Divider className={'divider'} orientation={'horizontal'}/>
                </td>
                <td className={'deleted-table__body__td'}>
                  {b.message}
                  <Divider className={'divider'} orientation={'horizontal'}/>
                </td>
                <td className={'deleted-table__body__td'}>
                  {b.deletedDate}
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
}

DeletedTable.propTypes = {
  tableParameters: PropTypes.object
}

export default DeletedTable
