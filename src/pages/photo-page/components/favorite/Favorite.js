import React, {useState} from 'react'
import './favorite.sass'
import FavoriteTable from "../../../../components/common/table/favoritesTable/FavoritesTable";
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import PropTypes from 'prop-types'
import Button from "../../../../components/common/button/button";
import Upload_Table from "../component/upload-table";
import { useMediaQuery } from "react-responsive";
import Checkbox from "../../../../components/common/checkbox/checkbox";


const Favorite = ({tableHeader, title}) => {
  const isMobile = useMediaQuery({ maxWidth: 960 });
  // eslint-disable-next-line no-unused-vars
  const [tableParameters, setTableParameters] = useState({
    headers: tableHeader,
    body: [
      {
        photoName: 'SAGA ADVENTURE',
        deletedBy: 'Vlyself',
        imo: '9527764',
        photographer: 'José Ricardo Rodriguez Montero',
        bookmarked: 'Feb 13, 2020 (6 days ago)',
        isChecked: true,
        id: '1234'
      },
      {
        photoName: 'SAGA ADVENTURE',
        deletedBy: 'Vlyself',
        imo: '9527764',
        photographer: 'José Ricardo Rodriguez Montero',
        bookmarked: 'Feb 13, 2020 (6 days ago)',
        isChecked: true,
        id: '1324234'
      },
      {
        photoName: 'SAGA ADVENTURE',
        deletedBy: 'Vlyself',
        imo: '9527764',
        photographer: 'José Ricardo Rodriguez Montero',
        bookmarked: 'Feb 13, 2020 (6 days ago)',
        isChecked: true,
        id: '12342354'
      },
    ]
  })
  const [isCheckAll, setIsCheckAll] = useState(true)

  const handleCheckbox = (itemId) => {
    if(itemId === 'full') {
      tableParameters.body.forEach(item => {
        item.isChecked = !isCheckAll;
      })
      setIsCheckAll(!isCheckAll)
      setTableParameters({
        headers: tableParameters.headers,
        body: tableParameters.body
      })
    }

    tableParameters.body.forEach(item => {
      if(item.id === itemId) {
        item.isChecked = !item.isChecked
      }
    })
    setTableParameters({
      headers: tableParameters.headers,
      body: tableParameters.body
    })
  }

  return (
    <div className={'favorite'}>
      <Typography firstText={'My favorites'} secondText={title}/>
      <div className={'favorite__container'}>
        <p>You have bookmarked <span>({tableParameters.body.length})</span> {title}</p>
      </div>
      <Paper className={'favorite__paper'}>
        {!isMobile ? (
          <FavoriteTable
            handleCheckbox={handleCheckbox}
            tableParameters={tableParameters}
            isCheck={isCheckAll}
          />
        ) : (
          <>
            <Checkbox checked={true} onChange={handleCheckbox}/>
            <div>
                <Checkbox checked={true} onChange={handleCheckbox}/>
                <Upload_Table 
                table_th_1 = "PHOTO NAME"
                table_td_1='SAGA ADVENTURE'
                table_th_2="IMO"
                table_td_2='9527764'
                table_th_3="PHOTOGRAPHER"
                table_td_3='José Ricardo Rodriguez Montero'
                table_th_4="BOOKMARKED"
                table_td_4='Feb 13, 2020 (6 days ago)'
                // table_th_5="EDIT"
                // table_td_5={<img src={edit} alt="edit"/>}
              />
            </div>
            <div>
                <Checkbox checked={true} onChange={handleCheckbox}/>
                <Upload_Table 
                table_th_1 = "PHOTO NAME"
                table_td_1='SAGA ADVENTURE'
                table_th_2="IMO"
                table_td_2='9527764'
                table_th_3="PHOTOGRAPHER"
                table_td_3='José Ricardo Rodriguez Montero'
                table_th_4="BOOKMARKED"
                table_td_4='Feb 13, 2020 (6 days ago)'
                // table_th_5="EDIT"
                // table_td_5={<img src={edit} alt="edit"/>}
              />
            </div>
            <div>
                <Checkbox checked={true} onChange={handleCheckbox}/>
                <Upload_Table 
                table_th_1 = "PHOTO NAME"
                table_td_1='SAGA ADVENTURE'
                table_th_2="IMO"
                table_td_2='9527764'
                table_th_3="PHOTOGRAPHER"
                table_td_3='José Ricardo Rodriguez Montero'
                table_th_4="BOOKMARKED"
                table_td_4='Feb 13, 2020 (6 days ago)'
                // table_th_5="EDIT"
                // table_td_5={<img src={edit} alt="edit"/>}
              />
            </div>
          </>
        )}
        <Button className={'favorite__paper__button'} variant={'secondary'}>Delete Selected</Button>
      </Paper>
    </div>
  )
}

Favorite.propTypes = {
  tableHeader: PropTypes.array,
  title: PropTypes.string
};

export default Favorite
