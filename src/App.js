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
	handleChange = ({target}) => {
		this.setState({
			[target.name]: target.value
		});
	}
	render() {
		return (<Container style={{
				marginTop: '2em',
			}}>
			<Header as='h1'>CardDB</Header>
			<br/>
			<Grid columns={2} >
				<Grid.Column>
					<SearchPane height={this.state.height} setData={this.setData} saveCard={this.saveCard} data={this.state.data} saved={this.state.saved}/>
				</Grid.Column>

				<Grid.Column>
					<TubPane height={this.state.height} setData={this.setData} saveCard={this.saveCard} data={this.state.data} saved={this.state.saved}/>
				</Grid.Column>

			</Grid>
		</Container>);
	}
}

export default App;
