import React, { Component } from 'react'
import {
	Button,
	Form,
	Input,
	Accordion,
	Icon,
} from 'semantic-ui-react'
import * as queryString from 'query-string';
import { withRouter } from "react-router";

import AppContainer from '../containers/AppContainer';
import subscribe from 'unstated-subscribe-hoc'

class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			search: "",
			field: [],
			set: [],
			expanded: false
		};
	}
	
	componentDidMount = () => {
		const search = this.props.history.location.search
		if(search){
			const query = queryString.parse(search)
			this.props.appStore.search(query).catch(err=>(err));
			this.setState({
				search:query.q,
				field:query.f ? query.f.split(",") : [],
				set:query.s ? query.s.split(",")  : []
			})
		}
	}

	handleChange = (event, target) => {
		this.setState({
			[target.name]: target.value
		});
	}

	handleSubmit = () => {
		const { search, set, field } = this.state

		const params = {
			q: search,
			s: set.join(','),
			f: field.join(','),
		}
		// eslint-disable-next-line
		const qs = queryString.stringify(params,{sort:false}).replace(/\%20/g, '+')
		this.props.history.push({
			pathname: '/search',
			search: `?${qs}`
		})
		this.props.appStore.search(params).catch(err=>(err))
	}
	serialize = function(obj) {
		var str = [];
		for (var p in obj)
		  if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		  }
		return str.join("&");
	}

	render () {
		const { expanded } = this.state
		const { isSearchLoading } = this.props.appStore.state
		const setOpt = [ 
			{ key: 'Open Ev 2018', value: 'Open Ev 2018', text: 'OpenEv \'18' }, 
			{ key: 'Open Ev 2017', value: 'Open Ev 2017', text: 'OpenEv \'17' }, 
			{ key: 'Open Ev 2016', value: 'Open Ev 2016', text: 'OpenEv \'16' },
			{ key: 'Open Ev 2015', value: 'Open Ev 2015', text: 'OpenEv \'15' },
			{ key: 'Open Ev 2014', value: 'Open Ev 2014', text: 'OpenEv \'14' },
			{ key: 'Open Ev 2013', value: 'Open Ev 2013', text: 'OpenEv \'13' },
			{ key: 'Open Ev 2012', value: 'Open Ev 2012', text: 'OpenEv \'12' },
			{ key: 'User Contributed', value: 'User Contributed', text: 'User Contributed' },
		]
		const feildOpt = [ 
			{ key: 'tag', value: 'tag', text: 'Tag' }, 
			{ key: 'cite', value: 'cite', text: 'Cite' },
			{ key: 'meta', value: 'meta', text: 'Document Map' }
		]
		
		return (
			<div>
				<Form>
					<Form.Group>
						<Form.Field control={Input}  width={12} onChange={this.handleChange} value={this.state.search} name="search" placeholder='Search for a cite or tag...'/>
						<Form.Field primary loading={isSearchLoading} onClick={this.handleSubmit} disabled={isSearchLoading} control={Button} width={4}>Search</Form.Field>
					</Form.Group>
					<Accordion  className="search-dropdown">
						<Accordion.Title onClick={()=>(this.setState({expanded:!expanded}))} active={expanded}>
						<Button>
							<Icon name='sliders' />
    						Options
  						</Button>
						<Icon name='dropdown' />
						</Accordion.Title>
						<Accordion.Content active={expanded}>
						{/* <Card fluid> */}
							<Form.Group >
								<Form.Dropdown width={8} name="set" value={this.state.set} onChange={this.handleChange} placeholder='Evidence Set' fluid  selection multiple  options={setOpt} />
								<Form.Dropdown disabled width={8} name="field" onChange={this.handleChange} placeholder='Search Fields (Coming soon!)' fluid  selection multiple  options={feildOpt} />
							</Form.Group>
						{/* </Card> */}
						</Accordion.Content>
					</Accordion>	
				</Form>
			</div>
		)
	}
}

export default subscribe(withRouter(SearchForm), { appStore: AppContainer });
