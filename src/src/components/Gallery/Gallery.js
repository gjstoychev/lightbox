import React from 'react'
import PropTypes from 'prop-types'

import GalleryLayout from './GalleryLayout'

export default class Gallery extends React.Component {
  static propTypes = {
    photos: PropTypes.array.isRequired,
    getGallery: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getGallery()
  }

  render () {
    const {photos} = this.props

    if (!photos || !photos.length) {
      return (
        <div className='container-fluid text-center'>
          <h3>Loading Application...</h3>
        </div>
      )
    }

    return <GalleryLayout photos={photos} />
  }
}
