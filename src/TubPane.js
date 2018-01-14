import React, {Component} from 'react';
import './App.css';
import CardView from './Card.js'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import fileDownload from 'react-file-download'
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

class TubPane extends Component {
	handleDownload = () => {
		var ids = [];
		this.props.saved.map((item) => ids.push(item._id))
		axios.post('http://ec2-52-39-12-223.us-west-2.compute.amazonaws.com/api/save',
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
	render() {
		// var cardsToRender = [];
		//
		// this.props.data.forEach((item)  => {
		// 	if (this.props.saved.includes(item._id)) {
		// 		cardsToRender.push(item)
		// 	}
		// });
		return (<div className="SearchPane">
			<Header as='h3' dividing>Saved</Header>
			<InfiniteScroll
				hasMore={false}
				height={this.props.height - 220}
				style={{overflowX:'hidden'}}
			>
			<Card.Group style={{padding:'5px', paddingLeft:'1px'}}>
				{
					this.props.saved.map((item) =>
						<CardView data={item}simple/>
					)
				}
			</Card.Group>
			</InfiniteScroll>

			<Divider/>
			<Form>
				<Form.Group >
					{/*<Form.Field control={Button} width={8} onClick={() => this.handleDownload()}>Download</Form.Field>*/}
					<Form.Field control={Button} width={8} onClick={() => this.handleDownload()}>Download</Form.Field>
				</Form.Group>
			</Form>
		</div>);
	}
}

export default TubPane;
