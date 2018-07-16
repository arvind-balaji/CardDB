import React, {Component} from 'react';
import './App.css';
import CardView from './Card'
import SearchForm from './SearchForm'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
	Button,
	Checkbox,
	Form,
	Grid,
	Input,
	Radio,
	Select,
	Card,
	Header,
	Divider
} from 'semantic-ui-react'

class SearchPane extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			searchStr: "food",
			searching: false
		};
	}

	handleSearch = str => {
		this.setState({searching: true});
		// axios.get('http://192.168.1.163/api/search?'+str)
		axios.get('http://home.arvindbalaji.com/api/search?'+str)
		.then(res => {
			if('error' in res.data){
				this.setState({searching: false});
			}else{
				this.setState({data: res.data.data, searching: false});
			}
		}).catch(err => {
			this.setState({searching: false});
		});
	}
	 saveCard = card => {
		this.props.setSaved([...this.props.saved, card]) 
	 }
	render() {
		return (
			<div className="SearchPane">
				<Header as='h3' dividing>Search</Header>
				<InfiniteScroll
					hasMore={false}
					height={this.props.height - 200}
					style={{overflowX:'hidden'}}
				>
					<div>
					<SearchForm handleChange={this.handleChange} searching={this.state.searching} handleSearch={this.handleSearch}/>
					<Card.Group style={{padding:'5px', paddingLeft:'1px'}}>
						{
							this.state.data.map((item, index) =>
								<CardView id={index} data={item} saveCard={this.saveCard}/>
							)
						}
					</Card.Group>
					</div>
				</InfiniteScroll>	
			</div>
		);
	}
}

export default SearchPane;
