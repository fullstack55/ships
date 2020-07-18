import React from 'react'
import './deleted.sass'
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import DeletedTable from "../../../../components/common/table/deletedTable/deletedTable";
import PropTypes from 'prop-types'

const Deleted = ({tableParameters, title}) => {


  return (
    <div className={'deleted'}>
      <Typography firstText={'My deleted'} secondText={title}/>
      <div className={'deleted__container'}>
        <p>You have <span>({tableParameters.body.length})</span> deleted {title} logged.</p>
      </div>
      <Paper className={'deleted__paper'}>
        <DeletedTable
          tableParameters={tableParameters}
        />
      </Paper>
    </div>
  )
}

Deleted.propTypes = {
  tableParameters: PropTypes.object,
  title: PropTypes.string
};

export default Deleted
