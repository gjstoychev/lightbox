import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const DateP = ({label, date, format}) => {
  if (Number(date)) {
    return <p>{label} {moment.unix(date).format(format)}</p>
  }

  return <p>{label} {moment(date).format(format)}</p>
}

DateP.propTypes = {
  label: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired
}

export default DateP
