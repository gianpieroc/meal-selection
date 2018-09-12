import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import Input from '../../components/input';
import { FETCH_BOOKING_START } from '../../stores/Booking/types';
import JourneyCard from '../../components/JourneyCard'

class FlightList extends React.Component {
  state = {
    clicks: 0
  }

  componentWillMount(){
    this.props.getBooking()
  }

  render() {
    const {clicks} = this.state;
    console.log(this.props.booking)
    const journeys = _.get(this,'props.booking.booking.journeys') || []
    return (
      <div>
        <h1> Select your flight </h1>
        {
          journeys.map(each=> (
            <JourneyCard
              onClick={()=> history.push}
              key={each.key}
              from={each.departure}
              to={each.arrival}
              departureDate={each.departureDate}
              arrivalDate={each.arrivalDate}
            />
          ))
        }

        <h1>Hello simple React webpack boilerplate</h1>
        <button
          onClick={() => {
            this.setState(({clicks}) => {
              return {clicks: clicks + 1};
            });
          }}>Click me</button>
        <h2>{clicks} click{clicks === 1 ? '' : 's'}</h2>
        <label>
          <p>Type here</p>
          <Input placeholder="Type here..." />
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  booking: state.booking.data,
})

const mapDispatchToProps = (dispatch) => ({
  getBooking: () => dispatch({type: FETCH_BOOKING_START})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightList)
