import {
  FETCH_BOOKING_START,
  FETCH_BOOKING_FAIL,
  FETCH_BOOKING_SUCCESS
} from './types'

export const startGetBooking = () => ({
    type: FETCH_BOOKING_START,
})

export const successGetBooking = (data) => ({
  type: FETCH_BOOKING_SUCCESS,
  payload: data
})

export const failGetBooking = (data) => ({
  type: FETCH_BOOKING_FAIL,
  payload: data
})
