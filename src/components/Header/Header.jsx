import React from 'react';
import './Header.css';

const listHeaderItems = {
	'001': {
		id: '001',
		title: 'LOGIN'
	},
	'002': {
		id: '002',
		title: 'BROWSE'
	},
	'003': {
		id: '003',
		title: 'ABOUT'
	}		
}

const Header = ({ text }) => {
	return (
		<header className="Header">
			<h1 className="Header__logo">{text}</h1>
			<ul className="Navigation">
				{Object.keys(listHeaderItems).map(key => <li className="Navigation__item" key={listHeaderItems[key].id}><a className="Navigation__link">{listHeaderItems[key].title}</a></li>)}
			</ul>
		</header>
	);
}

export default Header;