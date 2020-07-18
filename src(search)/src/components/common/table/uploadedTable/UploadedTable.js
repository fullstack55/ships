import React from 'react'
import PropTypes from 'prop-types'
import './uploadedTable.sass'
import TableHeader from "../table-header/table-header";
import edit from '../../../../assets/images/desktop/photo/Vector Smart Object.svg'

const UploadedTable = ({tableParameters}) => {

  return (
    <React.Fragment>
      <table cellSpacing={10} className={'uploaded-table'}>
        <TableHeader
          tableHeaders={tableParameters.headers}
        />
        <tbody className={'uploaded-table__body'}>
        {
          tableParameters.body.map((b, index) => (
            <tr key={index}>
              <td className={'uploaded-table__body__td'}>{b.photoName}</td>
              <td className={'uploaded-table__body__td'}>{b.imo}</td>
              <td className={'uploaded-table__body__td'}>{b.location}</td>
              <td className={'uploaded-table__body__td'}>{b.uploadDate}</td>
              <td className={'uploaded-table__body__td'}>
                <img src={edit} alt="edit"/>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </React.Fragment>
  )
}

UploadedTable.propTypes = {
  tableParameters: PropTypes.object,
}

export default UploadedTable
