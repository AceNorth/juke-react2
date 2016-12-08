import React from 'react';
import store from '../store';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';
import {connect} from 'react-redux';


function mapStateToProps(state, ownProps){
  let selectedAlbum = state.albums.selected;
  let currentSong= state.player.currentSong 
  let isPlaying= state.player.isPlaying 
  
  return {
      selectedAlbum,
      currentSong,
      isPlaying
  }
}

function mapDispatchToProps(dispatch){

  return {
    toggleOne: function(song, list){
      dispatch(toggleSong(song, list))
    }
  }
}


  
export default connect(
  mapStateToProps, 
  mapDispatchToProps)(Album);