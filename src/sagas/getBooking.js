import { put } from 'redux-saga/effects';
import {
  successGetBooking,
  failGetBooking,
} from '../stores/Booking/actions';
import mockup from '../constants/MockUp';

export default function* getBooking() {
  try {
    yield put(successGetBooking(mockup));
  }catch(e){

    yield put(failGetBooking(e));
  }
}
