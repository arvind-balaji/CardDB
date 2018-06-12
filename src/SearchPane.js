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
	handleSearch = (str) => {
		this.setState({searching: true});
		console.log(this.state.searchStr)
		axios.get('https://cors-anywhere.herokuapp.com/http://home.arvindbalaji.com/api/search?'+str).then(res => {
		// axios.get('http://192.168.1.163:8080/api/search?'+str).then(res => {
			this.setState({data: res.data.data, searching: false});
			// this.props.setData(res.data.data)
			console.log(res.data);
		});
	}
	handleChange = ({target}) => {
		this.setState({
			[target.name]: target.value
		});
	}
	// componentDidMount = () => {
	// 	this.handleSearch();
	// }
	render() {
		return (<div className="SearchPane">
			<Header as='h3' dividing>Search</Header>
			{/* <Form>
				<Form.Group >
					<Form.Field control={Input} width={12} name="searchStr" onChange={this.handleChange} placeholder='Search for a cite of tag...'/>
					<Form.Field loading={this.state.searching} disabled={this.state.searching} control={Button} width={4} onClick={this.handleSearch}>Search</Form.Field>
				</Form.Group>
			</Form> */}
			<InfiniteScroll
				hasMore={false}
				height={this.props.height - 200}
				style={{overflowX:'hidden'}}
			>
						<SearchForm handleChange={this.handleChange} searching={this.state.searching} handleSearch={this.handleSearch}/>

				<Card.Group style={{padding:'5px', paddingLeft:'1px'}}>
					{
						this.state.data.map((item) =>
							<CardView data={item} saveCard={this.props.saveCard}/>
						)
					}
				</Card.Group>
			</InfiniteScroll>

		</div>);
	}
}

export default SearchPane;
