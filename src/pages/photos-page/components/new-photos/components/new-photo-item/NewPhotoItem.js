import React from 'react'
import {PropTypes} from 'prop-types'

import './newPhotoItem.sass'

const NewPhotoItem = ({
    name,
    url,
    info: {
      photographer,
      captured,
      added,
      location,
      views,
      comments,
      category,
      imo,
      mmsi,
      callsign,
      flag,
    }
  }) => {
  return (
    <div className='photo-card'>
      <div
        style={{backgroundImage: `url(${url})`}}
        className='photo-card__ship-photo'
      >
        <span>{name}</span>
      </div>
      <div className='photo-card__ship-info'>
        {photographer ? <p>Photographer: <span className='custom-color'>{photographer}</span></p> : null}
        {captured ? <p>Captured: <span>{captured}</span></p> : null}
        {added ? <p>Added: <span>{added}</span></p> : null}
        {location ? <p>Location: <span>{location}</span></p> : null}
        {views ? <p>Views: <span>{views}</span></p> : null}
        {comments ? <p>Comments: <span>{comments}</span></p> : null}
        {category ? <p>Category: <span className='custom-color'>{category}</span></p> : null}
        {imo ? <p>Imo: <span>{imo}</span></p> : null}
        {mmsi ? <p>Mmsi: <span>{mmsi}</span></p> : null}
        {callsign ? <p>Callsign: <span>{callsign}</span></p> : null}
        {flag ? <p>Flag: <span>{flag}</span></p> : null}
      </div>
    </div>
  )
}

NewPhotoItem.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  info: PropTypes.object
}
export default NewPhotoItem