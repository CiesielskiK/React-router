import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CountriesFlagsList from '../presentational/CountriesFlagsList/CountriesFlagsList';
import { getCountries, searchCountries, deleteCountry } from '../actions/actions';

class CountriesFlagsContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(getCountries());
    this.props.dispatch(searchCountries(''));
  }
  search = event => {
    this.props.dispatch(searchCountries(event.target.value))
  }
  delete = id => {
    this.props.dispatch(deleteCountry(id))
  }
  render() {
    return (
      <div>
        <div className="search text-center searchInput">
          <input
            type="text"
            onChange={this.search}
          />
        </div>
        <CountriesFlagsList
          countries={this.props.visibleCountries}
          delete={this.delete}
        />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    countries: store.countriesReducer.countries,
    visibleCountries: store.countriesReducer.visibleCountries
  };
};

CountriesFlagsContainer.propTypes = {
  dispatch: PropTypes.func,
  countries: PropTypes.object
}.isRequired

export default connect(mapStateToProps)(CountriesFlagsContainer);
