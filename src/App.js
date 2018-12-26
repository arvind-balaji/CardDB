import React, {Component} from 'react';
import { Route } from "react-router-dom";
import './styles/App.css';
import SearchPane from './components/SearchPane';
import TubPane from './components/TubPane';
import CardModal from './components/CardModal';

import {
	Container,
	Grid,
	Header,
	Button,
	Icon
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

	render() {
		return (
			<div>
				<Route path="/card/:id" component={CardModal} />
				<Container style={{marginTop: '2em'}}>
					<Header as='h1'>
						<span className="logo-card">
							Debate {" "}
						</span>
						<span className="logo-vault">
							Cards
						</span>
					</Header> 
					<br/>
					<Grid columns={2} >
						<Grid.Column>
							<SearchPane 
								height={this.state.height+30} 
								setSaved={this.setSaved} 
								saved={this.state.saved}
							/>
						</Grid.Column>
						<Grid.Column>
							<TubPane 
								height={this.state.height-15} 
								setSaved={this.setSaved} 
								saved={this.state.saved}
							/>
						</Grid.Column>
					</Grid>
				</Container>,
				<Button href="https://github.com/arvind-balaji/debate-cards" style={{position:'absolute',top:'10px',right:'10px'}} color='black'>
				<Icon name='github' /> 
				Source
				</Button>,
				<div style={{position: 'absolute', bottom: '10px', textAlign: 'center',width: '100%', color:'#525252'}}> The Card Database | Arvind Balaji | 2018 </div>
			</div>
		);
	}
}

export default App;
