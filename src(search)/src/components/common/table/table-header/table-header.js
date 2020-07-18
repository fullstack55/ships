import React from "react";
import './table-header.sass'
import PropTypes from 'prop-types'
import Checkbox from "../../checkbox/checkbox";

const TableHeader = ({tableHeaders, handleCheckbox, isCheck}) => {
  return (
    <thead className={'table-header'}>
    <tr>
      {
        tableHeaders.map(h => (
          <React.Fragment key={h}>
            {
              h === ''
                ? <td key={h}><Checkbox checked={isCheck} name={'full'} onChange={handleCheckbox}/></td>
                : <td key={h}>{h}</td>
            }
          </React.Fragment>
        ))
      }
    </tr>
    </thead>
  )
};

TableHeader.propTypes = {
  tableHeaders: PropTypes.array,
  handleCheckbox: PropTypes.func,
  isCheck: PropTypes.bool
}

export default TableHeader
