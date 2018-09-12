import {
  FETCH_BOOKING_START,
  FETCH_BOOKING_FAIL,
  FETCH_BOOKING_SUCCESS
} from './types'

const initialState = {
  loading: false,
  error: null,
  data: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKING_START:
      return {
        // ...state,
        loading: true,
      }
    case FETCH_BOOKING_SUCCESS:
      return {
        // ...state,
        loading: false,
        data: action.payload
      }
    case FETCH_BOOKING_FAIL:
      return {
        // ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
