import React, {Component} from 'react';
import CardView from './Card'
import InfiniteScroll from 'react-infinite-scroll-component';

import {
	Button,
	Form,
	Card,
	Header,
	Divider,
} from 'semantic-ui-react'
import AppContainer from '../containers/AppContainer';
import subscribe from 'unstated-subscribe-hoc'

class TubPane extends Component {
	constructor () {
		super();
		this.state = {
			collections: "My Evidence"
		}
	}
	
	render() {
		const {height} = this.props;
		const {saved} = this.props.appStore.state;
		const {download, removeCard} = this.props.appStore;
		return (
			<div className="SearchPane">
				<Header className="tubpane-header" as='h3' dividing>
					Saved
				</Header>
				<InfiniteScroll
					hasMore={false}
					height={height - 220}
					style={{overflowX:'hidden'}}
				>
					<Card.Group style={{padding:'5px', paddingLeft:'1px'}}>
						{
							saved.map((item, index) =>
								<CardView key={index} data={item} simple/>
							)
						}
					</Card.Group>
				</InfiniteScroll>
				<Divider/>
				<Form>
					<Form.Group >
						<Form.Field disabled={saved.length < 1} primary control={Button}  onClick={() => download()}>Download</Form.Field>
						<Form.Field disabled={saved.length < 1} control={Button} onClick={() => removeCard()}>Clear</Form.Field>
					</Form.Group>
				</Form>
			</div>
		);
	}
}

export default subscribe(TubPane, { appStore: AppContainer });
;
