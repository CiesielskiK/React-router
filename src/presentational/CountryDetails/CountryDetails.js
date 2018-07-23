import React from 'react';
import PropTypes from 'prop-types';
import './CountryDetails.scss';

const CountryDetails = props => (
  <div className="countryWrapper">
    <header>
      <img
        className="countryPhoto" src={props.country.imageUrl}
        alt="country photo"
      />
    </header>
    <div className="countryInfo">
      <h1>{props.country.name}</h1>
      <h2>Continent: {props.country.continent}</h2>
      <div className="info">
        <div>
          <span>{props.country.populace}</span>
          <span>Populace [mln]</span>
        </div>
        <div>
          <span>{props.country.capital}</span>
          <span>Capital</span>
        </div>
        <div>
          <span>{props.country.currency}</span>
          <span>Currency</span>
        </div>
      </div>
    </div>
  </div>
);

CountryDetails.propTypes = {
   name: PropTypes.string,
   continent: PropTypes.string,
   populace: PropTypes.string,
   capital: PropTypes.string,
   currency: PropTypes.string,
}.isRequired;

export default CountryDetails;
