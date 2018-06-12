import React from 'react';
import {Divider, Card, Button} from 'semantic-ui-react';
import CardModal from './CardModal';


//meta = meta.join(" > ")
const CardView = (props) => {
	// const meta = props.data.meta ? Object.values(props.data.meta).join(" > ") : "";
	// const meta = props.data._id;
	const meta = 
		['set','fileName','pocket','hat','block']
		.map(key => props.data[key])
		.filter(String)
		.join(' > ')

	return(
	<Card onClick={()=>{}} fluid className="card">
	<CardModal id={props.data._id}>
		<Card.Content >
			<Card.Header> {props.data.tag} </Card.Header>
			<Card.Description className="card-cite" >{props.data.cite}</Card.Description>
			<Card.Meta>{meta}</Card.Meta>
		</Card.Content>
	</CardModal>	
	{!props.simple &&
		<Card.Content extra>
			<div className='ui two buttons'>
				<Button onClick={() => props.saveCard(props.data) } active="active" basic="basic" color='blue'>Save</Button>
			</div>
		</Card.Content>
	}
	{props.simple &&
		<Card.Content extra>
			<div className='ui two buttons'>
				<Button onClick={() => props.removeCard(props.data) } active="active" basic="basic" color='red'>Remove</Button>
			</div>
		</Card.Content>
	}
	</Card>
	)
}

export default CardView;
