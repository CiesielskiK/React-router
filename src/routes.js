import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/Navigation';
import Home from './presentational/Home';
import Contact from './presentational/Contact';
import NotFound from './presentational/NotFound';
import CountriesFlagsContainer from './containers/CountriesFlagsContainer';
import CountryDetailsContainer from './containers/CountryDetailsContainer';
import ContinentsContainer from './containers/ContinentsContainer';


export default (
  <Route path='/' component={Navigation}>
    <IndexRoute component={Home}/>
    <Route path='countries'>
      <IndexRoute component={CountriesFlagsContainer} />
      <Route path='country/:id' component={CountryDetailsContainer}/>
    </Route>
    <Route path='continents' component={ContinentsContainer} />
    <Route path='contact' component={Contact}/>
    <Route path='*' component={NotFound}/>
  </Route>
);
