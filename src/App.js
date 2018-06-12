import React, {Component} from 'react';
import './App.css';
import SearchPane from './SearchPane.js'
import TubPane from './TubPane.js'

import {
	Container,
	Grid,
	Header,
} from 'semantic-ui-react'

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			saved: [],
			height: '0'
		};
	}
	componentDidMount = () => {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({height: window.innerHeight});
	}
	setData = (result) => {
		this.setState({
			data: result
		});
	}
	saveCard = (data) => {
		this.setState({
			saved: [...this.state.saved, data]
		});
	}
	removeCard = (data) => {
		var array = [...this.state.saved]
		var index = array.indexOf(data)
		array.splice(index, 1);
		this.setState({
			saved: array
		});
	}
	removeAll = () => {
		this.setState({
			saved: []
		});
	}
	handleChange = ({target}) => {
		this.setState({
			[target.name]: target.value
		});
	}
	render() {
		return ([
		<Container style={{marginTop: '2em'}}>
			<Header as='h1'>CardDB</Header> 
			<br/>
			<Grid columns={2} >
				<Grid.Column>
					<SearchPane height={this.state.height+30} setData={this.setData} saveCard={this.saveCard} data={this.state.data} saved={this.state.saved}/>
				</Grid.Column>

				<Grid.Column>
					<TubPane height={this.state.height-15} setData={this.setData} removeAll={this.removeAll}removeCard={this.removeCard} saveCard={this.saveCard} data={this.state.data} saved={this.state.saved}/>
				</Grid.Column>
			</Grid>
		</Container>,
		<div style={{position: 'absolute', bottom: '10px', textAlign: 'center',width: '100%', color:'#525252'}}> CardDB | Arvind Balaji | 2018 </div>
		]);
	}
}

export default App;
