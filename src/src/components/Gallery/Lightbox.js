import React from 'react'
import PropTypes from 'prop-types'

import Badge from '../Badge'
import DateP from './DateP'
import Tags from './Tags'

import './Lightbox.css'

const Lightbox = ({photo}) => {
  const photoTitle = photo.title._content
  const photoComments = photo.comments._content || '0'
  const photoOwner = photo.owner.realname || photo.owner.username
  const photoDescription = photo.description._content || 'No description'
  const photoSrc = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
  const userAvatar = `http://farm${photo.owner.iconfarm}.staticflickr.com/${photo.owner.iconserver}/buddyicons/${photo.owner.nsid}.jpg`

  return (
    <div className='lightbox' id={photo.id}>
      <div className='lightbox-info'>
        <h3 className='lightbox-info-title'>{photoTitle}</h3>
        <div className='lightbox-info-owner'>
          <div className='lightbox-info-cell'>by</div>
          <div className='lightbox-info-mid-cell'>{photoOwner}</div>
          <div className='lightbox-info-cell'>
            <img className='lightbox-info-avatar' src={userAvatar} alt='avatar' />
          </div>
        </div>
        <hr />
        <Badge className='badge progress-bar-success'>{photo.views} views</Badge>
        <Badge className='badge progress-bar-warning'>{photoComments} comments</Badge>
        <DateP label='Taken on' date={photo.dates.taken} format='MMMM D, YYYY, HH:mm' />
        <DateP label='Posted on' date={photo.dates.posted} format='MMMM D, YYYY, HH:mm' />
        <p>{photoDescription}</p>
        <Tags items={photo.tags.tag} />
      </div>
      <div className='card-lightbox-img cell'>
        <img src={photoSrc} alt='img'/>
        <a className='card-lightbox-close' href='#'> </a>
      </div>
    </div>
  )
}

Lightbox.propTypes = {
  photo: PropTypes.object.isRequired
}

export default Lightbox
