import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import { connect } from 'react-redux';
import store from '../store';

function mapStateToProps(state){
  let artists = state.artists.list; 
 
  return {
    artists
  }
}

function mapDispatchToProps(dispatch){

  return {}
}


class FilterableArtistsContainer extends React.Component {

  constructor() {

    super();

    this.state = {
      inputValue: ''
    }
  ;

    this.handleChange = this.handleChange.bind(this);

  }

 
  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {

    const inputValue = this.state.inputValue;
    console.log("this.props ")
    const filteredArtists = this.props.artists.filter(artist => artist.name.match(inputValue));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <Artists artists={filteredArtists}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(FilterableArtistsContainer);

