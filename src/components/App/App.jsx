import React from 'react';
import './App.css';
import Header from '../Header/Header';
import AppBody from '../AppBody/AppBody';
import App__sidebar from '../App__sidebar/App__sidebar';
import SearchForm from '../SearchForm/SearchForm';
import SearchCategories from '../SearchCategories/SearchCategories';
import WatchList from '../WatchList/WatchList';
import MovieList from '../MovieList/MovieList';

class App extends React.Component {
	state = {
		movieCards: [],
		emptyCard: 1,
		watchlist: JSON.parse(localStorage.getItem('movie-mate-watchlist')) || []
	}

	componentWillMount() {
		fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bb699f1827e7eb5ccc45ecb88b66fc3c&language=en-US&page=1`)
		.then(response => {
			if (response.ok) {
				return response.json();
			}
			throw new Error('Error while fetching ' + response.statusText)
		})
		.then(data => {
			const movies = data.results.map(movie => ({
				id: movie.id,
				title: movie.title,
				text: movie.overview.substring(0,100) + '...',
				rating: movie.vote_average,
				release: movie.release_date.substring(0,4),
				poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + movie.poster_path
			}));

			this.setState({
				movieCards: movies,
			});

		})
		.catch(err => console.error(err));
	}

	searchMovieList = (query) => {
		if (query !== '') {
			fetch(`https://api.themoviedb.org/3/search/movie?api_key=bb699f1827e7eb5ccc45ecb88b66fc3c&language=en-US&query=${query}&page=1&include_adult=false`)
				.then(response => {
					if (response.ok) {
						return response.json();
					}
					throw new Error('Error while fetching ' + response.statusText)
				})
				.then(data => {
					const movies = data.results.map(movie => ({
						id: movie.id,
						title: movie.title,
						text: movie.overview.substring(0,100) + '...',
						rating: movie.vote_average,
						release: movie.release_date.substring(0,4),
						poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + movie.poster_path
					}));

					this.setState({
						movieCards: movies
					});

					if (this.state.movieCards.length === 0) {
						this.setState({
							emptyCard: 0
						});
					}
				})
				.catch(err => console.error(err));
		}
	}

	setCategoryList = (query) => {
		fetch(`https://api.themoviedb.org/3/movie/${query}?api_key=bb699f1827e7eb5ccc45ecb88b66fc3c&language=en-US&page=1`)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Error while fetching ' + response.statusText)
			})
			.then(data => {
				const movies = data.results.map(movie => ({
					id: movie.id,
					title: movie.title,
					text: movie.overview.substring(0,100) + '...',
					rating: movie.vote_average,
					release: movie.release_date.substring(0,4),
					poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + movie.poster_path
				}));

				this.setState({
					movieCards: movies
				});
			})
			.catch(err => console.error(err));
	}

	addMovieCard = (card) => {
		const singleMovieCard = {...card};

		if (this.state.watchlist.every(card => card.id !== singleMovieCard.id)) {
			this.setState({
				watchlist: [...this.state.watchlist, singleMovieCard]
			});
		}
	}

	deleteMovieCard = (id) => {
		this.setState({
			watchlist: this.state.watchlist.filter(card => card.id !== id)
		})
	}

	render() {
		const { movieCards, emptyCard, watchlist } = this.state;
		localStorage.setItem('movie-mate-watchlist', JSON.stringify(this.state.watchlist));
		return (
			<div className="App">
				<Header text="Movie Mate"/>
				<AppBody>
					<App__sidebar>
						<SearchForm getMovies={this.searchMovieList} />
						<SearchCategories onSetSearchValues={this.setCategoryList} />
						<WatchList watchlist={watchlist} DeleteMovieCardToMovieList={this.deleteMovieCard} />
					</App__sidebar>
					<MovieList movieCards={movieCards}  AddMovieCardToMovieList={this.addMovieCard} getEmptyCard={emptyCard} />					
				</AppBody>
			</div>
		);
	}
}

export default App;