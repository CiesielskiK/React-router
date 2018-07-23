import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCountry } from '../actions/actions';
import CountryDetails from '../presentational/CountryDetails/CountryDetails';

class CountryDetailsContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(getCountry(this.props.params.id));
  }
  render() {
    return (
      <CountryDetails country={this.props.selectedCountry}/>
    );
  }
}

const mapStateToProps = store => {
  return {
    selectedCountry: store.countriesReducer.selectedCountry
  };
};

CountryDetailsContainer.propTypes = {
  dispatch: PropTypes.func,
  selectedCountry: PropTypes.object
}.isRequired

export default connect(mapStateToProps)(CountryDetailsContainer);
