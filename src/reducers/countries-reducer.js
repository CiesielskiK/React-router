import * as actionTypes from '../actions/actionTypes';
import countriesData from '../../data/countries.json';

const initialState = {
  countries: countriesData,
  selectedCountry: {},
  visibleCountries: []
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COUNTRIES:
      return Object.assign({}, state, {countries: state.countries});
    case actionTypes.GET_COUNTRY: {
      const selectedCountry = state.countries.find(country => country.id === parseInt(action.id, 10));
      return Object.assign({}, state, {selectedCountry});
    }
    case actionTypes.SEARCH_COUNTRIES: {
      const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
      return Object.assign({}, state, {visibleCountries: foundCountries})
    }
    case actionTypes.DELETE_COUNTRY: {
      const notDeletedCountries = state.countries.filter(country => country.id != action.id);
      const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.id != action.id)
      return Object.assign({}, state, {
        countries: notDeletedCountries,
        visibleCountries: notDeletedVisibleCountries}
      )
    }
    case actionTypes.SET_CONTINENT: {
      const continentCountries = state.countries.filter(country => country.continent === action.name);
      return Object.assign({}, state, {visibleCountries: continentCountries})
    }
    default:
      return state;
  }
}

export default countriesReducer;
