import React from 'react';
import PropTypes from 'prop-types';
import './SearchCategories.css';

const listCategoriesButtons = {
	'001': {
		id: 'popular',
		title: 'popular'
	},
	'002': {
		id: 'top_rated',
		title: 'top rated'
	},
	'003': {
		id: 'upcoming',
		title: 'upcoming'
	}	
};

class SearchCategories extends React.Component {
	static propTypes = {
		onSetSearchValues: PropTypes.func.isRequired
	};

	_searchValues = (evt) => {
		this.props.onSetSearchValues(evt.target.id);
	};

	render() {
		return (
			<div className="SearchCategories">
				{Object.keys(listCategoriesButtons).map(key => <button className="SearchCategories__btn" id={listCategoriesButtons[key].id} onClick={this._searchValues}>{listCategoriesButtons[key].title}</button>)}
			</div>		
		);
	}


}

export default SearchCategories;