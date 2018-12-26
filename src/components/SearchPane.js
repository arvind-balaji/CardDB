import React, {Component} from 'react';
import CardView from './Card'
import SearchForm from './SearchForm'
import AppContainer from '../containers/AppContainer';
import subscribe from 'unstated-subscribe-hoc'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Route } from "react-router-dom";
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
	// constructor() {
	// 	super();
	// }

	saveCard = card => {
		this.props.setSaved([...this.props.saved, card]) 
	}

	searchResults = (data) => (
		<Card.Group style={{padding:'5px', paddingLeft:'1px'}}>
			{
				data.map((item, index) =>
					<CardView key={item._id} data={item}/>
				)
			}
		</Card.Group>
	)
	
	render() {
		const {search} = this.props.appStore.state;
		// const {handleChange, handleSearch} = this.state
		return (
			<div className="SearchPane">
				<Header as='h3' dividing>Search</Header>
				<InfiniteScroll
					hasMore={false}
					height={this.props.height - 200}
					style={{overflowX:'hidden'}}
				>
					<div>
					<SearchForm />
          	<Route path="/search" component={() => this.searchResults(search)} />
					</div>
				</InfiniteScroll>	
			</div>
		);
	}
}

export default subscribe(SearchPane, { appStore: AppContainer });

