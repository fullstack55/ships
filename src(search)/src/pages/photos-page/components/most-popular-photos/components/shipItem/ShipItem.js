import React from 'react'
import {PropTypes} from 'prop-types'

import './shipItem.sass'
import like from '../../../../../../assets/images/desktop/most-popular/like.svg'

import Button from '../../../../../../components/common/button/button'


const ShipItem = ({url, firstTitle, secondTitle, withLike}) => {

  return (
    <div className='ship-item'>
      <img src={url} alt='icon' className='ship-item__bg-image'/>
      <div className='ship-item__more-detail'>
        {
          withLike
            ? <p>{firstTitle}</p>
            : <p>Ship name: <span> {firstTitle}</span></p>
        }
        {
          withLike
            ? <p>{secondTitle}</p>
            : <p>Photographer: <span> {secondTitle}</span></p>
        }
        <Button>View ship details</Button>
        {
          withLike
            ? <div className='like'><img src={like} alt="like"/> 10</div>
            : null
        }
      </div>
    </div>
  )
}

ShipItem.propTypes = {
  url: PropTypes.string,
  firstTitle: PropTypes.string,
  secondTitle: PropTypes.string,
  withLike: PropTypes.bool
}

export default ShipItem