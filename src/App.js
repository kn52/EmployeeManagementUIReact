import React, { Component} from 'react';
import './App.css';
import './greetingData.json'
import DefaultRoute from './route/DefaultRoute';

export default class App extends Component{
	
	render() {
		return (
			<div className="employee-container">
				<DefaultRoute/>
			</div>
		);
	}
}
