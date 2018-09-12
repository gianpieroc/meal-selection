import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import Input from '../../components/input';
import { FETCH_BOOKING_START } from '../../stores/Booking/types';
import MealCard from '../../components/MealCard'

class MealList extends React.Component {
  state = {
    clicks: 0
  }

  componentWillMount(){
    this.props.getBooking()
  }

  render() {
    const options = _.get(this,'props.booking.options') || []
    console.log(options)
    return (
      <div>
        <h1> Select your meal </h1>
        { options.map(each => (
            <MealCard
              onClick={()=> history.push}
              key={each.mealId}
              name={each.desc}
              priceRange={each.priceRange}
              currency={each.currency}
            />
          ))
        }
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
)(MealList)
