import React from 'react';
import {connect} from 'react-redux';
import Albums from '../components/Albums';


function mapStateToProps(state){
 console.log("STATE ", state)
  let albums = state.albums.list;
  return {
      albums
  }
}

function mapDispatchToProps(dispatch){

  return {}
  }


export default connect(
  mapStateToProps, 
  mapDispatchToProps)(Albums);