import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setContinent, deleteCountry } from '../actions/actions';
import CountriesFlagsList from '../presentational/CountriesFlagsList/CountriesFlagsList';

class ContinentsContainer extends Component {
  constructor(props) {
    super(props);
  }
  chooseContinent = event => {
    this.props.dispatch(setContinent(event.target.value));
  }
  deleteCountry = id => {
    this.props.dispatch(deleteCountry(id));
  }
  componentDidMount() {
    this.props.dispatch(setContinent('Europa'));
  }
  render() {
    return (
      <div>
        <select onChange={this.chooseContinent}>
          <option value="Europa">Europa</option>
          <option value="Afryka">Afryka</option>
        </select>
        <CountriesFlagsList
          countries={this.props.visibleCountries}
          delete={this.deleteCountry}
        />
      </div>
    )
  }
}

ContinentsContainer.propTypes = {
  dispatch: PropTypes.func,
  visibleCountries: PropTypes.array
}.isRequired

const mapStateToProps = store => {
  return {
    visibleCountries: store.countriesReducer.visibleCountries
  };
};

export default connect(mapStateToProps)(ContinentsContainer);
