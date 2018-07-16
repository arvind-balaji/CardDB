import React, {Component} from 'react'
import axios from 'axios'
import { Button, Header, Image, Modal, Loader, Dimmer, Segment } from 'semantic-ui-react'

class CardModal extends Component {
	constructor() {
		super()
		this.state = {
			data: "",
			open: false,
			searching: true,
			id: ""
		};
	}
	getData = () => {
		this.setState({searching: true});
		console.log(this.state.searchStr)
		axios.get('http://home.arvindbalaji.com/api/card/' + this.props.id).then(res => {
		// axios.get('http://192.168.1.163:8080/api/card/' + this.props.id).then(res => {
			this.setState({data: res.data.data, searching: false});
			// this.props.setData(res.data.data)
			console.log(res.data);
		});
	}
	handleOpen = () => {
		this.setState({open:true})
		// if((this.state.data.length === 0)){
			this.getData();
		// } 
	}
	render () {
		const {data, open, searching} = this.state;
		return (
			<Modal onOpen={this.handleOpen} open={open} trigger={this.props.children} >
				<Modal.Content scrolling>
					<Modal.Description>
						{searching && 
							// <Segment>
								<Dimmer active inverted>
									<Loader inverted content='Loading' />
								</Dimmer>
							// </Segment>
						}
						<div style={{padding:'10px'}}dangerouslySetInnerHTML={{__html: data.fullCard}} />
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
      				<Button onClick={()=>this.setState({open:false})}>
        				Done 
      				</Button>
    			</Modal.Actions>
  			</Modal>
		)
	}
}



export default CardModal