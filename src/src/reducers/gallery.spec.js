import reducer from './gallery'
import * as gallery from './gallery'

describe('(Redux Module) gallery', () => {
  describe('(Action Creators)', () => {
    it('should return the action object on getGallery call', () => {
      const got = gallery.getGallery()
  
      const want = {
        type: gallery.GET_GALLERY,
        payload: {
          request: {
            method: 'GET',
            url: '/get_gallery'
          }
        }
      }
  
      expect(got).toEqual(want)
    })
  })

  describe('(Reducer)', () => {
    it('should be initialized', () => {
      const got = reducer(undefined, {})
      const want = gallery.initialState
      expect(got).toEqual(want)
    })

    it('should return the previous state if no action matched', () => {
      const state = {fake: 'state'}
      const got = reducer(state, {type: '@@@@@@@'})
      expect(got).toEqual(state)
    })

    it('should add photos to the state on GET_GALLERY_SUCCESS', () => {
      const state = []
    
      const got = reducer(state, {
        type: gallery.GET_GALLERY_SUCCESS,
        payload: {
          data: [1, 2, 3, 4]
        }
      })
    
      const want = {
        photos: [1, 2, 3, 4]
      }
    
      expect(got).toEqual(want)
    })

    it('should return untouched state on GET_GALLERY_FAILURE', () => {
      const state = {
        photos: [1, 2, 3]
      }

      const got = reducer(state, {
        type: gallery.GET_GALLERY_FAILURE
      })

      const want = {
        photos: [1, 2, 3]
      }

      expect(got).toEqual(want)
    })
  })
})
