/**
 * Created by aviad on 8/29/2016.
 */

import './About.css'
import React, {Component} from 'react';

import {Nav, NavItem, Grid, Row} from 'react-bootstrap'

class About extends Component{
	constructor(props){
		super(props);
		this.state={
			activeKey : 1
		}
	}
	
	_handleSelect(selected_key){
		this.setState({activeKey:selected_key});
	}
	
	render(){
		let currentView = <h2>Test</h2>;
		switch (this.state.activeKey){
			case 1:
				currentView = <h2>1</h2>
				break;
			case 2:
				currentView = <h2>2</h2>
				break;
			case 3:
				currentView = <h2>3</h2>
				break;
		}
		return (
			<div>
				<Nav bsStyle="tabs" className="flex-justify" activeKey={this.state.activeKey} onSelect={this._handleSelect.bind(this)}>
					<NavItem eventKey={1} href="#">Hello</NavItem>
					<NavItem eventKey={2} href="#">Team</NavItem>
					<NavItem eventKey={3} href="#">Venture Proposal</NavItem>
				</Nav>
				<Grid>
					<Row>
						{currentView}
					</Row>
				</Grid>
			</div>
		)
	}
}
export default About;