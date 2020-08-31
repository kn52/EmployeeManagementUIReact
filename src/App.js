import React, { Component} from 'react';
import './App.css';
import './greetingData.json'
import Dashboard from "./components/Dashboard";

export default class App extends Component{
	
	render() {
		return (<Dashboard/>);
	}
}
