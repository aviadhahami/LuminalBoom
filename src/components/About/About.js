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
					name:'Aviya Sela',
					picture:'assets/team/AviyaPhoto.jpg',
					about:'completed her degree in Computer Science with a minor in Psychology at the Efi Arazi School of Computer Science at IDC Herzliya. In the IDF, Aviya served in the elite intelligence unit 8200. Before that, she spent a year in the Auckland International College in New Zealand as part of the International Baccalaureate Program. During her studies, Aviya participated in the Media Innovation Lab (miLAB) Human-Computer Interaction Program and was part of IDC Debate Club, alongside tutoring in Pisgah to promote the agenda of technology and cyber education to children from all groups of society. Aviya is a director of HackIDC 2015 and 2016 - Israel’s leading annual student Hackathon.'
				},
				raz:{
					name:'Raz Nussbaum',
					picture:'assets/team/RazPhoto.png',
					about:'is a third year Psychology student at the Baruch Ivcher School of Psychology at IDC Herzliya. Raz was a research assistant at the Decision Making Research Center (DICE lab) and he is on the dean’s list. In the IDF, Raz served as a combat officer in the Artillery Corps special unit “Rochev Shamayim” that operates drones for the ground forces. He worked at the IAI Company as a drone operating consultant and project manager assistant in Multi-rotor drones developing projects. He participated in the IEC\'s Startup class, IDC investment club and volunteered at “Perach Tutorial Project” as a personal tutor. He was a professional basketball player as a teenager and loves scuba diving.'
					
				},
				roy:{
					name:'Roy Meirom',
					picture:'assets/team/RoyPhoto.png',
					about:'is a fourth year student in the joint degree program for Law and Business Administration at the Radzyner School of Law and the Arison School of Business (with a merit scholarship). Roy grew up both in Israel and abroad, and has served as a commander in the IDF’s Combat Reconnaissance Force. Throughout his studies, he founded “ISCA” - an academic advocacy program; he took part in various social-tech ventures and was a coordinator for both IDC’s “Legal Clinic for Start-Ups” and the “Executive Education" unit. Roy was a yearlong counselor at the “Raphael Recanati International School” and is a research assistant at the “Zvi Meitar Institute for Emerging Technologies”. He is an avid swimmer and outdoor enthusiast.'
					
					
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
				currentView = <About_Team members={this.state.team}/>;
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
								<MemberCard member={this.props.members.aviya}/>
							</Col>
							<Col md={4}>
								<MemberCard member={this.props.members.raz}/>
							</Col>
							<Col md={4}>
								<MemberCard member={this.props.members.roy}/>
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