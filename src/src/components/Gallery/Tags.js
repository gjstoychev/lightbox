import React from 'react'
import PropTypes from 'prop-types'

import Badge from '../Badge'

const Tags = ({items}) => {
  if (!items.length) {
    return <p>No tags</p>
  }

  return (
    <div>
      {
        items.map(tag => <Badge key={tag.id} className='badge'>{tag._content}</Badge>)
      }
    </div>
  )
}

Tags.propTypes = {
  items: PropTypes.array.isRequired
}

export default Tags
