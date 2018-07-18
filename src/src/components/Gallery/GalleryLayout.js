import React from 'react'
import PropTypes from 'prop-types'

import LoadingP from './LoadingP'
import Navbar from './Navbar'
import Card from './Card'

import './GalleryLayout.css'

export default class GalleryLayout extends React.Component {
  static propTypes = {
    photos: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      items: (props.photos.length >= 12) ? 12 : props.photos.length,
      maxItems: props.photos.length,
      loading: false
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.loadMoreItems = this.loadMoreItems.bind(this)
  }

  handleScroll() {
    const {infScroll} = this.refs
    const onTheBottom = (infScroll.scrollTop + infScroll.clientHeight >= infScroll.scrollHeight) ? true : false

    if (onTheBottom) {
      this.loadMoreItems()
    }
  }

  loadMoreItems() {
    const {items, maxItems, loading} = this.state

    if (loading) {
      return
    }

    if (items < maxItems) {
      const step = 6;
     
      this.setState({
        loading: true
      })
      
      setTimeout(() => {
        const moreItems = (items + step < maxItems) ? items + step : maxItems

        this.setState({
          items: moreItems,
          loading: false
        })
      }, 1000)
    }
  }

  componentDidMount() {
    const {infScroll} = this.refs

    if (infScroll) {
      infScroll.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount() {
    const {infScroll} = this.refs

    if (!infScroll) {
      infScroll.removeEventListener('scroll', this.handleScroll)
    }
  }

  render () {
    const {items, maxItems, loading} = this.state
    const {photos} = this.props

    const wrapperStyle = {
      height: `${window.innerHeight - 120}px`
    }
    
    return (
      <div>
        <Navbar />
        <div ref='infScroll' className='container-fluid text-center wrapper' style={wrapperStyle}>
          <div>
            { photos.map((photo, index) => (index < items) ? <Card photo={photo} key={photo.id} /> : null) }
          </div>
          <LoadingP loading={loading} items={items} maxItems={maxItems} />
        </div>
      </div>
    )
  }
}
