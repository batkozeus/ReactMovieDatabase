import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';


export default class MovieCard extends React.Component {
	static PropTypes = {
		title: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		rating: PropTypes.number.isRequired,
		release: PropTypes.number.isRequired,
		poster: PropTypes.string.isRequired,
		AddMovieCard: PropTypes.func
	};

	static defaultProps = {
		AddMovieCard: () => {}
	};

	render() {
		const { title, text, rating, release, poster, AddMovieCard } = this.props;

		return (
			<div className="MovieCard">
				<span className="MovieCard__rating">{rating}</span>	
				<img className="MovieCard__poster" src={poster} alt=""/>			
				<div className="MovieCard__info">
					<h2 className="MovieCard__title">{title}</h2>
					<p className="MovieCard__descr">{text}</p>
					<p className="MovieCard__release">Release date: {release}</p>
				</div>
				<button className="MovieCard__btn" onClick={AddMovieCard}>+</button>
			</div>
		);
	}
};