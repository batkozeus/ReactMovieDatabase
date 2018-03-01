import React from 'react';
import './SearchForm.css';


const SearchForm = ({ getMovies }) => {
	let form = null;
	let input = null;

	const onFormSubmit = (evt) => {
		evt.preventDefault();

		getMovies(input.value);

		form.reset();
	}

	return (
		<form className="SearchForm" onSubmit={onFormSubmit} ref={node => (form = node)}>
			<input className="SearchForm__input" placeholder="Search for movies by name..." type="text" ref={node => (input = node)} />
			<button className="SearchForm__btn" type="submit">search</button>
		</form>		
	);
}

export default SearchForm;