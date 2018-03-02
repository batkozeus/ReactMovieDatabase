import React from 'react';
import PropTypes from 'prop-types';
import './WatchlistCard.css';


export default class WatchlistCard extends React.Component {
	static PropTypes = {
		title: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		rating: PropTypes.number.isRequired,
		release: PropTypes.number.isRequired,
		poster: PropTypes.string.isRequired,
		DeleteMovieCard: PropTypes.func
	};

	static defaultProps = {
		DeleteMovieCard: () => {}
	};

	render() {
		const { title, text, rating, release, poster, DeleteMovieCard } = this.props;

		return (
			<div className="WatchlistCard">
				<img className="WatchlistCard__img" src={poster} alt=""/>			
				<div className="WatchlistCard__body">
					<h3 className="WatchlistCard__title">{title}</h3>
					<p className="WatchlistCard__release">Released: {release}</p>
					<p className="WatchlistCard__rating">Rating: {rating}</p>
					<button className="WatchlistCard__btn" onClick={DeleteMovieCard}>-</button>	
				</div>
			</div>
		);
	}
};