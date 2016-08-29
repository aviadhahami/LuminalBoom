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
					name:'Challenge A',
					picture:'https://lh4.googleusercontent.com/-blXNrBLIAYs/AAAAAAAAAAI/AAAAAAAAACk/_blBP6GDiok/s0-c-k-no-ns/photo.jpg',
					active:false,
					location:'TLV, IL',
					participants:12245,
					daysToGo:12,
					percentage:90
				},
				card_2:{
					name:'Challenge A',
					picture:'https://lh4.googleusercontent.com/-blXNrBLIAYs/AAAAAAAAAAI/AAAAAAAAACk/_blBP6GDiok/s0-c-k-no-ns/photo.jpg',
					active:false,
					location:'TLV, IL',
					participants:12245,
					daysToGo:12,
					percentage:90
				},
				card_3:{
					name:'Challenge A',
					picture:'https://lh4.googleusercontent.com/-blXNrBLIAYs/AAAAAAAAAAI/AAAAAAAAACk/_blBP6GDiok/s0-c-k-no-ns/photo.jpg',
					active:false,
					location:'TLV, IL',
					participants:12245,
					daysToGo:12,
					percentage:90
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