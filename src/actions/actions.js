import * as actionTypes from './actionTypes';

export const getCountries = () => ({
  type: actionTypes.GET_COUNTRIES
});

export const getCountry = id => ({
  type: actionTypes.GET_COUNTRY,
  id
});

export const deleteCountry = id => ({
  type: actionTypes.DELETE_COUNTRY,
  id
});

export const searchCountries = searchText => ({
  type: actionTypes.SEARCH_COUNTRIES,
  searchText
});

export const setContinent = name => ({
  type: actionTypes.SET_CONTINENT,
  name
});
