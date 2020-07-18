import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './uploaded.sass'
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import UploadedTable from "../../../../components/common/table/uploadedTable/UploadedTable";
import Pagintation from "../../../profile-page/components/posts/pagination/pagination";


const Uploaded = ({media}) => {
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
        <UploadedTable tableParameters={tableParameters}/>
        <Pagintation totalPages={1132} />
      </Paper>
    </div>
  )
}

Uploaded.propTypes = {
  media: PropTypes.string
}

export default Uploaded