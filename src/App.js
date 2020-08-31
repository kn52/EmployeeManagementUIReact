import React, { Component} from 'react';
import './App.css';
import './greetingData.json'
import DashBoard from "./component/DashBoard";

export default class App extends Component{
	
	render() {
		return (<DashBoard/>);
	}
}
