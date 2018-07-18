import React from 'react'
import PropTypes from 'prop-types'

import Lightbox from './Lightbox'

import './Card.css'

const Card = ({photo}) => {
  const photoId = `#${photo.id}`
  const photoTitle = photo.title._content
  const photoOwner = photo.owner.realname || photo.owner.username
  const photoSrc = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
              
  return (
    <div className='card'>
      <img className='img-thumbnail img-responsive card-img' src={photoSrc} alt='img' />
      <a href={photoId}>
        <div className='card-info'>
          <div className='card-info-table'>
            <p className='card-info-cell'>{photoTitle}</p>
          </div>
          <div className='card-info-table'>
            <p className='card-info-cell'>{photoOwner}</p>
          </div>
        </div>
      </a>
      <Lightbox photo={photo} />
    </div>
  )
}

Card.propTypes = {
  photo: PropTypes.object.isRequired
}

export default Card
