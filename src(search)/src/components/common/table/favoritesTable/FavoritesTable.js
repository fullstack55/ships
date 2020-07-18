import React from 'react'
import PropTypes from 'prop-types'
import './favoritesTable.sass'
import TableHeader from "../table-header/table-header";
import Checkbox from "../../checkbox/checkbox";

const FavoriteTable = ({tableParameters, handleCheckbox, isCheck}) => {

  return (
    <React.Fragment>
      <table cellSpacing={10} className={'favorite-table'}>
        <TableHeader
          tableHeaders={tableParameters.headers}
          handleCheckbox={handleCheckbox}
          isCheck={isCheck}
        />
        <tbody className={'favorite-table__body'}>
        {
          tableParameters.body.map((b, index) => (
            <tr key={index}>
              <td className={'favorite-table__body__td'}>
                  <Checkbox checked={b.isChecked} name={b.id} onChange={handleCheckbox}/>
              </td>
              <td className={'favorite-table__body__td'}>{b.photoName}</td>
              <td className={'favorite-table__body__td'}>{b.imo}</td>
              <td className={'favorite-table__body__td'}>{b.photographer}</td>
              <td className={'favorite-table__body__td'}>{b.bookmarked}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </React.Fragment>
  )
}

FavoriteTable.propTypes = {
  tableParameters: PropTypes.object,
  handleCheckbox: PropTypes.func,
  isCheck: PropTypes.bool
}

export default FavoriteTable
