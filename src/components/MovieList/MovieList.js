import React from 'react';
import PropTypes from 'prop-types';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';

class MovieList extends React.Component {
	static propTypes = {
		movieCards: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
			release: PropTypes.number.isRequired,
			poster: PropTypes.string.isRequired
		}).isRequired).isRequired,
		AddMovieCardToMovieList: PropTypes.func.isRequired,
		getEmptyCard: PropTypes.string.isRequired		
	};

	render() {
		const { movieCards, AddMovieCardToMovieList, getEmptyCard } = this.props;

		if (getEmptyCard !== 0) {
			return (
				<div className="MovieList">
					{movieCards.map((movies) => (<div className="MovieList__item" key={movies.id}><MovieCard AddMovieCard={() => {AddMovieCardToMovieList(movies);}} {...movies}/></div>))}
				</div>
			);
		}

		else {
			return (
				<div className="MovieList">
					{movieCards.map((movies) => (<div className="MovieList__item" key={movies.id}><MovieCard AddMovieCard={() => {AddMovieCardToMovieList(movies);}} {...movies}/></div>))}
					<p className="MovieList__msg">Sorry, we didn't find anything</p>
				</div>
			);
		}

		
	}
}

export default MovieList;