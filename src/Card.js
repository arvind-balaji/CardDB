import React, {Component} from 'react';
import {Divider, Card, Button, Icon} from 'semantic-ui-react';
import CardModal from './CardModal';
import axios from 'axios'


//meta = meta.join(" > ")
class CardView  extends Component{
	// const meta = props.data.meta ? Object.values(props.data.meta).join(" > ") : "";
	// const meta = props.data._id;
	constructor() {
		super()
		this.state = {
			modalOpen: false,
			modalData: ""
		};
	}
	getData = () => {
		this.setState({searching: true});
		console.log(this.state.searchStr)
		axios.get('http://home.arvindbalaji.com/api/card/' + this.props.data._id).then(res => {
		// axios.get('http://192.168.1.163:8080/api/card/' + this.props.id).then(res => {
			this.setState({modalData: res.data.data});
		});
	}
	openModal = () => {
		this.setState({modalOpen:true})
		this.getData()
	}
	render() {
		const meta = 
		// console.log(['set','fileName','pocket','hat','block']
		// .map(key => props.data[key]))
		['set','fileName','pocket','hat','block']
		.map(key => this.props.data[key])
		.filter(Boolean)		
		.join(' > ');
		return(
			<Card fluid className="card card-view">
				<CardModal open={this.state.modalOpen} openModal={this.toggleModal} closeModal={() => this.setState({modalOpen:false, data: ""})} data={this.state.modalData} id={this.props.data._id}/>
				<Card.Content >
					<Card.Header> {this.props.data.tag} </Card.Header>
					<Card.Description className="card-cite" >{this.props.data.cite}</Card.Description>
					<Card.Meta>{meta}</Card.Meta>
				</Card.Content>
				{!this.props.simple &&
					<Card.Content extra>
						
						<div style={{}} className='ui  buttons'>
							<Button style={{"margin": "5px 0 5px 0"}} onClick={() => this.props.saveCard(this.props.data) } icon  color='blue'labelPosition='right'> Save <Icon  name='arrow right' /></Button>
						</div>
						<div style={{}} className='ui  buttons'>
							<Button style={{"margin": "5px 0 5px 0"}} onClick={() => this.openModal() } icon active="active" basic="basic" color='blue' primary labelPosition='right'> View <Icon  name='eye' /></Button>
						</div>
					</Card.Content>
				}
				{this.props.simple &&
					<Card.Content extra>
						<div style={{}} className='ui  buttons'>
							<Button style={{"margin": "5px 0 5px 0"} }onClick={() => this.props.removeCard(this.props.data) } icon  basic="basic" color='red' labelPosition='right'> Remove <Icon  name='remove' /></Button>
						</div>
						<div style={{}} className='ui  buttons'>
							<Button style={{"margin": "5px 0 5px 0"}} onClick={() => this.openModal() } icon active="active" basic="basic" color='blue' primary labelPosition='right'> View <Icon  name='eye' /></Button>
						</div>
					</Card.Content>
				}
			</Card>
		)
	}
}

export default CardView;
