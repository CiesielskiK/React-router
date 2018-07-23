import React from 'react';
import PropTypes from 'prop-types';
import './CountryFlag.css';

const CountryFlag = props => (
  <div className="countryLogoWrapper">
    <img
      className="countryLogo"
      src={props.country.imageUrl}
      alt="country photo"
    />
  </div>
);

CountryFlag.propTypes = {
  country: PropTypes.object,
  imageUrl: PropTypes.string
}.isRequired;

export default CountryFlag;
