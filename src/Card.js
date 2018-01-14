import React from 'react';
import {Card, Button} from 'semantic-ui-react';


//meta = meta.join(" > ")
const CardView = (props) => {
	const meta = props.data.meta ? Object.values(props.data.meta).join(" > ") : "";
	return(
	<Card fluid className="card">
	<Card.Content>
		<Card.Header>{props.data.tag}</Card.Header>
		<Card.Description style={{"font-size": "15"}}>{props.data.cite}</Card.Description>
		<Card.Meta>{meta}</Card.Meta>

	</Card.Content>
	{!props.simple &&
		<Card.Content extra>
			<div className='ui two buttons'>
				<Button onClick={() => props.saveCard(props.data) } active="active" basic="basic" color='green'>Save</Button>
			</div>
		</Card.Content>
	}
	</Card>
	)
}

export default CardView;
