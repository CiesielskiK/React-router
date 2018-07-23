import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import CountryFlag from '../CountryFlag/CountryFlag';
import './CountriesFlagsList.css';

const CountriesFlagsList = props => (
  <div className="countriesList">
    {props.countries.map(country => {
      return (
        <div className="singleCountry" key={country.id}>
          <a className="removeButton" onClick={() => props.delete(country.id)}>
            <i className="fas fa-times-circle"></i>
          </a>
          <Link className="Logo" to={'countries/country/' + country.id}>
            <CountryFlag  country={country}/>
            <h3 className="countryName">{country.name}</h3>
          </Link>
        </div>
      )
    })}
  </div>
);

CountriesFlagsList.propTypes = {
  countries: PropTypes.array.isRequired
}

export default CountriesFlagsList;
