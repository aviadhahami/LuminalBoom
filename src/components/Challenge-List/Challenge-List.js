/**
 * Created by aviad on 8/29/2016.
 */


import './Challenge-List.css'
import React,{Component} from 'react'
import {browserHistory} from 'react-router'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import ChallengeCard from './../ChallengeCard/ChallengeCard'

const history = browserHistory;

class ChallangeList extends  Component{
	constructor(props){
		super(props);
		this.state={
			cards : {
				card_1:{
					name:'Mendalimos Family',
					picture:'assets/pictures/MendalimosBarPhoto.png',
					active:true,
					by:'Mendalimos',
					location:'TLV, IL',
					participants:25,
					daysToGo:12,
					percentage:87,
					linkTo:'https://www.instagram.com/explore/tags/mendalimosfamily/',
					description:'Upload a photo / video in the concept of “familiness” - anything goes! The most creative photo will win 200 ILS.'
				},
				card_2:{
					name:'Bizzy Dizzy!',
					picture:'http://goo.gl/qrcqEt',
					active:false,
					location:'TLV, IL',
					participants:12245,
					daysToGo:12,
					percentage:20,
					description:'Details will be available soon....',
					by:'Dizzy Frishdon',
				},
				card_3:{
					name:'Balloony Alma',
					by:'Kuli Alma',
					picture:'http://goo.gl/jjJOC6',
					active:false,
					location:'Sderot, IL',
					participants:12245,
					daysToGo:12,
					percentage:56,
					description:'Details will be available soon....'
				},
			}
		}
	}
	
	routeTo() {
		history.push(`/${this.route}`);
	}
	
	render(){
		return(
				<Grid>
					<div className="challenge-list-container">
						<Row>
							<Col md={12}>
								<p className="challenges-list-title">What's popular</p>
							</Col>
						</Row>
						<Row>
							<Col md={4}>
								<ChallengeCard data={this.state.cards.card_1}/>
							</Col>
							<Col md={4}>
								<ChallengeCard data={this.state.cards.card_2}/>
							</Col>
							<Col md={4}>
								<ChallengeCard data={this.state.cards.card_3}/>
							</Col>
						</Row>
					</div>
				</Grid>
		)
	}
	
}


export  default  ChallangeList