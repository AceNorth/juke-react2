import {connect} from 'react-redux';
import Station from '../components/Station';
import { convertSong } from '../utils'
import { toggleSong } from '../action-creators/player';


function mapStateToProps(state, ownProps){
	let isPlaying = state.player.isPlaying;
	let currentSong = state.player.currentSong;
	let genre = ownProps.params.genreName;
	let songs = state.songs.filter(function(song){
		return song.genre === genre 
	}).map(convertSong)
	return {
		isPlaying,
		currentSong,
		genre,
		songs
	}
}

function mapDispatchToProps(dispatch){

	return {
		toggleOne: function (song, list) {
      		dispatch(toggleSong(song, list));
    	}
	}
}


export default connect(
	mapStateToProps, 
	mapDispatchToProps)(Station);