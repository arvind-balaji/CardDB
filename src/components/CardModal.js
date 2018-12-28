import React, {Component} from 'react'
import { Button,  Modal, Loader, Dimmer } from 'semantic-ui-react'
import AppContainer from '../containers/AppContainer';
import subscribe from 'unstated-subscribe-hoc'
class CardModal extends Component {
	componentDidMount = async () => {
		const {getCard} = this.props.appStore;
		getCard(this.props.match.params.id);
	}

	goBack = () => {
		const {history} = this.props
		if(history.length<=1){
			history.push('/')
		}else{
			history.goBack()
		}
	}
	render () {
		const {downloadOne, state} = this.props.appStore;

		return (
			<Modal open>
				<Modal.Content scrolling>
					<Modal.Description>
						{  state.isCardLoading && 
							// <Segment>
								<Dimmer active inverted>
									<Loader inverted content='Loading' />
								</Dimmer>
							// </Segment>
						}
						<div style={{padding:'10px'}} dangerouslySetInnerHTML={{__html: state.card.fullCard}} />
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>     		
					<Button primary onClick={()=>downloadOne(this.props.match.params.id)}>
        		Download 
      		</Button>
					<Button  secondary onClick={()=>this.goBack()}>
        		Done 
      		</Button>
    			</Modal.Actions>
  		</Modal>
		)
	}
}



export default subscribe(CardModal, { appStore: AppContainer });
