import { connect } from 'react-redux'

import { getGallery } from '../reducers/gallery'
import Gallery from '../components/Gallery'

export const mapStateToProps = (state) => ({
  photos: state.gallery.photos
})

export const mapDispatchToProps = {
  getGallery
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
