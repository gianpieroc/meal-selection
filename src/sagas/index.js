import { takeLatest, all } from 'redux-saga/effects';
import * as types from '../stores/Booking/types';

import getBooking from './getBooking';

export default function * root () {
  yield all([
    takeLatest(types.FETCH_BOOKING_START, getBooking),
  ])
}
