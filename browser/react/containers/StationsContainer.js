import {connect} from 'react-redux';
import Stations from '../components/Stations';

const stationMaker = function(songs) {
	let stations = {};
	songs.forEach(function(song){
		if (!stations[song.genre]) {
			stations[song.genre] = [];
		}
		stations[song.genre].push(song);
		})
	return stations;
}

function mapStateToProps(state) {
	let songs = state.songs; 
	return {
		stations: stationMaker(songs)
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps)(Stations);