/**
 * Created by aviad on 8/29/2016.
 */
import './ChallengeCard.css'
import React,{Component} from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'

class ChallengeCard extends Component{
	constructor(props){
		super(props);
		this.state = {
			name:this.props.data.name,
			active:this.props.data.active,
			location:this.props.data.location,
			participants:this.props.data.participants,
			daysToGo:this.props.data.daysToGo,
			percentage: this.props.data.percentage,
			picture:this.props.data.picture
		}
	}
	
	render(){
		return(
			<div className="card-container">
				<div className="card-photo">
					<img src={this.state.picture} alt=""/>
					<p className="card-title">
						{this.state.name}
					</p>
				</div>
				<div className="card-details">
					<div className="location">
						<p><i className="fa fa-map-marker"></i>{this.state.location}</p>
					</div>
					<div className="loading">
					
					</div>
					<div className="flex-row info"></div>
				</div>
			</div>
		)
	}
}

export default ChallengeCard