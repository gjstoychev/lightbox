// Actions
export const GET_GALLERY = 'GET_GALLERY'
export const GET_GALLERY_SUCCESS = 'GET_GALLERY_SUCCESS'
export const GET_GALLERY_FAILURE = 'GET_GALLERY_FAILURE'

// Action Creators
export const getGallery = () => ({
  type: GET_GALLERY,
  payload: {
    request: {
      method: 'GET',
      url: '/get_gallery'
    }
  }
})

// Reducer
export const initialState = {
  photos: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_GALLERY_SUCCESS:
      return {
        ...state,
        photos: action.payload.data
      }

    case GET_GALLERY_FAILURE:
      return state

    default:
      return state
  }
}
