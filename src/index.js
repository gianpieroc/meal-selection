import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './stores';
import sagas from './sagas';
import configureStore from './store';
import './index.css';

const store = configureStore()
store.runSaga(sagas)

// Pages
import MealList from './pages/MealList';
import FlightList from './pages/FlightList';
import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="main-container">
            <Header title="GAirlines" subtitle="Meal Selection"/>
            <Route exact path="/" component={FlightList}/>
            <Route exact path="/meals" component={MealList}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

render(<App /> , document.getElementById('app'));
