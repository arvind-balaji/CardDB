import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Card, Button, Icon} from 'semantic-ui-react';
import AppContainer from '../containers/AppContainer';
import subscribe from 'unstated-subscribe-hoc'

class CardView  extends Component{
	
	render() {
		const {removeCard, saveCard} = this.props.appStore;
		const {data, history} = this.props
		// generate doc hierarchy
		const meta = 
		['set','fileName','pocket','hat','block']
		.map(key => this.props.data[key])
		.filter(Boolean)		
		.join(' > ');

		return(
			<Card fluid className="card card-view">
				<Card.Content >
					<Card.Header> {data.tag} </Card.Header>
					<Card.Description className="card-cite" >{data.cite}</Card.Description>
					<Card.Meta>{meta}</Card.Meta>
				</Card.Content>
				{!this.props.simple &&
					<Card.Content extra>
						
						<div style={{}} className='ui  buttons'>
							<Button style={{"margin": "5px 0 5px 0"}} onClick={() => saveCard(data) } icon  color='blue' labelPosition='right'> Save <Icon  name='arrow right' /></Button>
						</div>
						<div style={{}} className='ui  buttons'>
							<Button style={{"margin": "5px 0 5px 0"}} onClick={() => history.push(`/card/${data._id}`) } icon active basic color='blue' primary labelPosition='right'> View <Icon  name='eye' /></Button>
						</div>
					</Card.Content>
				}
				{this.props.simple &&
					<Card.Content extra>
						<div style={{}} className='ui  buttons'>
							<Button style={{"margin": "5px 0 5px 0"} } onClick={() => removeCard(data._id) } icon  basic color='red' labelPosition='right'> Remove <Icon  name='remove' /></Button>
						</div>
						<div style={{}} className='ui  buttons'>
							<Button style={{"margin": "5px 0 5px 0"}} onClick={() => history.push(`/card/${data._id}`) } icon active basic color='blue' primary labelPosition='right'> View <Icon  name='eye' /></Button>
						</div>
					</Card.Content>
				}
			</Card>
		)
	}
}

export default subscribe(withRouter(CardView), { appStore: AppContainer });
