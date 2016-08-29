/**
 * Created by aviad on 8/29/2016.
 */

import './About.css'
import React, {Component} from 'react';

import {Nav, NavItem, Grid, Row, Col} from 'react-bootstrap'
import MemberCard from './MemberCard/MemberCard'

class About extends Component{
	constructor(props){
		super(props);
		this.state={
			activeKey : 2,
			team:{
				aviya:{
					name:'Aviya Sela'
				},
				raz:{
					name:'Raz Nussbaum'
				},
				roy:{
					name:'Roy Meirom'
				}
			}
		}
	}
	
	_handleSelect(selected_key){
		this.setState({activeKey:selected_key});
	}
	
	render(){
		let currentView = <h2>Test</h2>;
		switch (this.state.activeKey){
			case 1:
				currentView = <About_Hello />;
				break;
			case 2:
				currentView = <About_Team />;
				break;
			case 3:
				currentView = <About_Venture />;
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

class About_Venture extends Component{
	render(){
		return(
			<h2>Under construction...</h2>
		)
	}
}
class About_Team extends Component{
	render(){
		return(
			<div>
				<div className="team_bg">
					<p className="team_title">Meet the team</p>
					<div className="team_title-frame">
						<p>We are Zell Entrepreneurship Program 2016 SIPers, hopefully 2016 students</p>
					</div>
				</div>
				<div className="team_members-container">
					<Grid>
						<Row>
							<Col md={4}>
								<MemberCard member={true} />
							</Col>
							<Col md={4}>
								{/*<MemberCard member={this.state.team.raz}/>*/}
							</Col>
							<Col md={4}>
								{/*<MemberCard member={this.state.team.roy}/>*/}
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		)
	}
}
class About_Hello extends Component{
	render(){
		return(
			<Grid>
				<Row>
					<div className="hello_bg" />
				</Row>
				<Row>
					<div className="hello_content-bg">
						<p>Our mission is to connect businesses to user generated content, based on online challenges</p>
					</div>
				</Row>
			</Grid>
		)
	}
}

export default About;