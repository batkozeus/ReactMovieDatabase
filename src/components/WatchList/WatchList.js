import React from 'react';
import PropTypes from 'prop-types';
import './WatchList.css';
import WatchlistCard from '../WatchlistCard/WatchlistCard';

class WatchList extends React.Component {
	static propTypes = {
		watchlist: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
			release: PropTypes.number.isRequired,
			poster: PropTypes.string.isRequired
		}).isRequired).isRequired,
		DeleteMovieCardToMovieList: PropTypes.func.isRequired	
	};

	render() {
		const { watchlist, DeleteMovieCardToMovieList } = this.props;

		if (watchlist.length === 0) {
			return (
				<div className="WatchList">
					<h2 className="WatchList__title">WatchList</h2>
					<p className="WatchList__msg">Add movies to watchlist...</p>
					{watchlist.map((list) => (<WatchlistCard key={list.id} DeleteMovieCard={() => {DeleteMovieCardToMovieList(list.id);}} {...list}/>))}
				</div>		
			);			
		}

		else {
			return (
				<div className="WatchList">
					<h2 className="WatchList__title">WatchList</h2>
					{watchlist.map((list) => (<WatchlistCard key={list.id} DeleteMovieCard={() => {DeleteMovieCardToMovieList(list.id);}} {...list}/>))}
				</div>	
			);
		}
	
	}
}

export default WatchList;