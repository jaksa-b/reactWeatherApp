import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({term: event.target.value});
  }
  onFormSubmit(event) {
    event.preventDefault();
    console.log("submit", this.state.term);

    this.props.fetchWeather(this.state.term);
    this.setState({term : ''});
  }
  render () {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Search city"
          className="form-control"
          onChange={this.onInputChange}
          value={this.state.term}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispachToProps)(SearchBar);
