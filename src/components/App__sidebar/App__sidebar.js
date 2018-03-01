import React from 'react';
import './App__sidebar.css';


class App__sidebar extends React.Component {
	render() {
		return (
			<div className="App__sidebar">
				{this.props.children}
			</div>
			
		);
	}
}

export default App__sidebar;