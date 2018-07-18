import React from 'react'
import PropTypes from 'prop-types'

import './LoadingP.css'

const LoadingP = ({loading, items, maxItems}) => {
  if (loading) {
    return <p className='loading'>Loading More Items...</p>
  }
  
  return <p className='loading'>{items}/{maxItems} images loaded</p>
}

LoadingP.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.number,
  maxItems: PropTypes.number
}

export default LoadingP
