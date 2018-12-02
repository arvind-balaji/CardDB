import React, {Component} from 'react';
import './App.css';
import CardView from './Card.js'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Categorizer from './Categorizer';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import fileDownload from 'react-file-download'
import {
	Button,
	Form,
	Card,
	Header,
	Divider,
	Input
} from 'semantic-ui-react'

class TubPane extends Component {
	constructor () {
		super();
		this.state = {
			collections: "My Evidence"
		}
	}
	handleDownload = () => {
		var ids = [];
		this.props.saved.map((item) => ids.push(item._id))
		axios.post('http://home.arvindbalaji.com/api/save',
		// axios.post('http://192.168.1.163:8080/api/save',
		{
			ids: ids,
		},
		{
			responseType: 'blob'
		}).then(function(response) {
			console.log(response);
			fileDownload(response.data, 'Evidence.docx')
		}).catch(function(error) {
			console.log(error);
		});
	}
	handleChange = ({target}) => {
		this.setState({
			[target.name]: target.value
		});
	}

	removeCard = id => {
		var array = []
		if(id){
			array = [...this.props.saved]
			var index = array.indexOf(id)
			array.splice(index, 1);
		}
		this.props.setSaved(array);
	}

	render() {
		const {height, saved} = this.props;
		return (
			<div className="SearchPane">
				<Header className="tubpane-header" as='h3' dividing>
					Saved
					{/* <Categorizer/> */}
				</Header>
				<InfiniteScroll
					hasMore={false}
					height={height - 220}
					style={{overflowX:'hidden'}}
				>
					{/* <Form>
						<Form.Group >
							<Form.Field control={Input}  icon='pencil' value="Evidence" placeholder='Search...' />
							<Header as='h4' contentEditable={true} dividing>Collections</Header>
						</Form.Group>
					</Form> */}
					<Card.Group style={{padding:'5px', paddingLeft:'1px'}}>
						{
							saved.map((item, index) =>
								<CardView id={index} removeCard={this.removeCard} data={item} simple/>
							)
						}
					</Card.Group>
				</InfiniteScroll>
				<Divider/>
				<Form>
					<Form.Group >
						<Form.Field disabled={saved.length < 1} primary control={Button}  onClick={() => this.handleDownload()}>Download</Form.Field>
						<Form.Field disabled={saved.length < 1} control={Button} onClick={() => this.removeCard()}>Clear</Form.Field>
					</Form.Group>
				</Form>
			</div>
		);
	}
}

export default TubPane;
