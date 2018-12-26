import React, {Component} from 'react'
import { Button, Header, Image, Modal, Loader, Dimmer, Segment } from 'semantic-ui-react'
import AppContainer from '../containers/AppContainer';
import subscribe from 'unstated-subscribe-hoc'
class CardModal extends Component {
	componentDidMount = async () => {
		const {getCard} = this.props.appStore;
		getCard(this.props.match.params.id);
	}

	render () {
		const {closeModal, state} = this.props.appStore;

		return (
			<Modal open>
				<Modal.Content scrolling>
					<Modal.Description>
						{/* {  && 
							// <Segment>
								<Dimmer active inverted>
									<Loader inverted content='Loading' />
								</Dimmer>
							// </Segment>
						} */}
						<div style={{padding:'10px'}} dangerouslySetInnerHTML={{__html: state.card.fullCard}} />
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
      				<Button primary onClick={()=>this.props.history.goBack()}>
        				Done 
      				</Button>
    			</Modal.Actions>
  			</Modal>
		)
	}
}



export default subscribe(CardModal, { appStore: AppContainer });
