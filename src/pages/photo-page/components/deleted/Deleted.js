import React from 'react'
import './deleted.sass'
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import DeletedTable from "../../../../components/common/table/deletedTable/deletedTable";
import PropTypes from 'prop-types'
import Upload_Table from "../component/upload-table";
import { useMediaQuery } from "react-responsive";
import ship from '../../../../assets/images/desktop/photo/ship.png'

const Deleted = ({tableParameters, title}) => {
  
  const isMobile = useMediaQuery({ maxWidth: 960 });

  return (
    <div className={'deleted'}>
      <Typography firstText={'My deleted'} secondText={title}/>
      <div className={'deleted__container'}>
        <p>You have <span>({tableParameters.body.length})</span> deleted {title} logged.</p>
      </div>
      <Paper className={'deleted__paper'}>
        {!isMobile ? (
          <DeletedTable
            tableParameters={tableParameters}
          />
        ):(
          <>
            {
              tableParameters.body.map((b, inbox) => (
                  <Upload_Table 
                  key = {inbox}
                  table_th_1 = "PHOTO"
                  table_td_1={
                    <>
                      <img src={b.url || ship} alt="photo" width={50}/>
                      <div className="photo_id">
                        <span>ID: {b.photo.id}</span>
                        <span>view: <a href="#"> small</a> <a href="#"> little</a> <a href="#"> big</a></span>
                      </div>
                    </>
                  }
                  table_th_2="DELETED BY"
                  table_td_2={b.deletedBy}
                  table_th_3="REASON"
                  table_td_3={b.reason}
                  table_th_4="PERSONAL MESSAGE"
                  table_td_4={b.message}
                  table_th_5="DELETE DATE"
                  table_td_5={b.date}
                  />
              ))
            }
          </>
        )}
      </Paper>
    </div>
  )
}

Deleted.propTypes = {
  tableParameters: PropTypes.object,
  title: PropTypes.string
};

export default Deleted
