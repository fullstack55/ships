import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './uploaded.sass'
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import UploadedTable from "../../../../components/common/table/uploadedTable/UploadedTable";
import Pagintation from "../../../profile-page/components/posts/pagination/pagination";
import Upload_Table from "../component/upload-table";
import { useMediaQuery } from "react-responsive";
import edit from '../../../../assets/images/desktop/photo/Vector Smart Object.svg'

const Uploaded = ({media}) => {
    const isMobile = useMediaQuery({ maxWidth: 960 });
    // eslint-disable-next-line no-unused-vars
  const [tableParameters, setTableParameters] = useState({
    headers: [`${media.match(/photo|video/)} name`, 'IMO', 'location', 'upload date', 'edit'],
    body: [
      {
        photoName: 'TEST FOR NEW SITE',
        imo: '9527764',
        location: 'Botlek, Rotterdam, Netherlands',
        uploadDate: 'Feb 13, 2020 (6 days ago)',
        edit: true,
        id: '1233244'
      },
      {
        photoName: 'TEST FOR NEW SITE',
        imo: '9527764',
        location: 'Le Treport, Normandy, France',
        uploadDate: 'Feb 13, 2020 (6 days ago)',
        edit: true,
        id: '12345'
      },
      {
        photoName: 'TEST FOR NEW SITE',
        imo: '9527764',
        location: 'Le Treport, Normandy, France',
        uploadDate: 'Feb 13, 2020 (6 days ago)',
        edit: true,
        id: '12666634'
      },
    ]
  })

  return (
    <div className={'uploaded'}>
      <Typography firstText={'My uploaded'} secondText={media}/>
      <div className={'uploaded__container'}>
        <p>You have uploaded <span>({tableParameters.body.length})</span> {media}</p>
      </div>
      <Paper className={'uploaded__paper'}>
      {!isMobile ? (
        <UploadedTable tableParameters={tableParameters}/>
      ) : (
        <>
          <Upload_Table 
            table_th_1 = "PHOTO NAME"
            table_td_1='TEST FOR NEW SITE'
            table_th_2="IMO"
            table_td_2='9527764'
            table_th_3="LOCATION"
            table_td_3='Le Treport, Normandy, France'
            table_th_4="UPLOADDATA"
            table_td_4='Feb 13, 2020 (6 days ago)'
            table_th_5="EDIT"
            table_td_5={<img src={edit} alt="edit"/>}
          />
          <Upload_Table 
            table_th_1 = "PHOTO NAME"
            table_td_1='TEST FOR NEW SITE'
            table_th_2="IMO"
            table_td_2='9527764'
            table_th_3="LOCATION"
            table_td_3='Le Treport, Normandy, France'
            table_th_4="UPLOADDATA"
            table_td_4='Feb 13, 2020 (6 days ago)'
            table_th_5="EDIT"
            table_td_5={<img src={edit} alt="edit"/>}
          />
          <Upload_Table 
            table_th_1 = "PHOTO NAME"
            table_td_1='TEST FOR NEW SITE'
            table_th_2="IMO"
            table_td_2='9527764'
            table_th_3="LOCATION"
            table_td_3='Le Treport, Normandy, France'
            table_th_4="UPLOADDATA"
            table_td_4='Feb 13, 2020 (6 days ago)'
            table_th_5="EDIT"
            table_td_5={<img src={edit} alt="edit"/>}
          />
        </>
      )}
        <Pagintation totalPages={1132} />
      </Paper>
    </div>
  )
}

Uploaded.propTypes = {
  media: PropTypes.string
}

export default Uploaded