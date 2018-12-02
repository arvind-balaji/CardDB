import React, {Component} from 'react'
import { Button, Header, Image, Modal, Loader, Dimmer, Segment } from 'semantic-ui-react'

class CardModal extends Component {
	render () {
		return (
			<Modal open={this.props.open} >
				<Modal.Content scrolling>
					<Modal.Description>
						{this.props.data.length == 0 && 
							// <Segment>
								<Dimmer active inverted>
									<Loader inverted content='Loading' />
								</Dimmer>
							// </Segment>
						}
						<div style={{padding:'10px'}} dangerouslySetInnerHTML={{__html: this.props.data.fullCard}} />
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
      				<Button primary onClick={()=>this.props.closeModal()}>
        				Done 
      				</Button>
    			</Modal.Actions>
  			</Modal>
		)
	}
}



export default CardModal