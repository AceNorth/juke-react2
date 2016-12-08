import React from 'react';
import {connect} from 'react-redux';
import AddSong from '../components/AddSong';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';
import store from '../store';

function mapStateToProps(state, ownProps) {
  let songs = state.songs;
  let playlistId = state.playlists.selected.id;

  return {
    songs,
    playlistId
  }
}

function mapDispatchToProps(dispatch){

  return {
    handleSubmitDispatcher: function(playlistId, songId) {
      return dispatch(addSongToPlaylist(playlistId, songId))
    }
  }

}




class AddSongContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        songId: 1,
        error: false
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const playlistId = this.props.playlistId;
    const songId = this.state.songId;
    this.props.handleSubmitDispatcher(playlistId, songId)
      .catch(() => this.setState({ error: true }));

  }

  render() {
    return (
      <AddSong
        {...this.props}
        error={this.state.error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
        );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddSongContainer);
