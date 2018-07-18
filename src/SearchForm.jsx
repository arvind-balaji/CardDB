import React, { Component } from 'react'
import {
	Button,
	Form,
	Dropdown,
	Input,
	Accordion,
	Icon,
	Label,
	Checkbox,
	Grid,
	Radio,
	Select,
	Card,
	Header,
	Divider
} from 'semantic-ui-react'
class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			search: "",
			field: [],
			set: [],
			searching: false,
			expanded: false
		};
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
		
		this.props.handleSearch(this.serialize(params));
		console.log(this.serialize(params));
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
		const setOpt = [ 
			{ key: '2018 Files', value: '2018 Files', text: '2018 Files'}, 
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
						<Form.Field control={Input}  width={12} onChange={this.handleChange} name="search" placeholder='Search for a cite or tag...'/>
						<Form.Field primary loading={this.props.searching} onClick={this.handleSubmit} disabled={this.props.searching} control={Button} width={4}>Search</Form.Field>
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
								<Form.Dropdown width={8} name="set" onChange={this.handleChange} placeholder='Evidence Set' fluid  selection multiple  options={setOpt} />
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

export default SearchForm