import React, {useState} from 'react'
import './favorite.sass'
import FavoriteTable from "../../../../components/common/table/favoritesTable/FavoritesTable";
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import PropTypes from 'prop-types'
import Button from "../../../../components/common/button/button";


const Favorite = ({tableHeader, title}) => {
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
        <FavoriteTable
          handleCheckbox={handleCheckbox}
          tableParameters={tableParameters}
          isCheck={isCheckAll}
        />
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
