/**
 * Created by aviad on 8/29/2016.
 */
import './ChallengeCard.css'
import React,{Component} from 'react'
import {Grid, Row, Col, Button, ProgressBar} from 'react-bootstrap'

class ChallengeCard extends Component{
	constructor(props){
		super(props);
		this.state ={...this.props.data};
	}
	
	render(){
		return(
			<div className={this.state.active?'card-container active':'card-container not-active'} onClick={()=>{if (this.state.linkTo) window.open(this.state.linkTo);}}>
				<div className="card-photo">
					<img src={this.state.picture} alt=""/>
					<p className="card-title">
						{this.state.name}
					</p>
				</div>
				<div className="card-details">
					<div className="description">
						<p className="description-title">Description <small>(by {this.state.by})</small></p>
						<p>{this.state.description}</p>
					</div>
					<div className="location">
						<p><i className="fa fa-map-marker"></i> {this.state.location}</p>
					</div>
					<div className="loading">
						<ProgressBar bsStyle={this.state.percentage > 85 ? 'success' : this.state.percentage < 30 ? 'danger' : 'warning'} now={this.state.percentage} />
					</div>
					<div className="info">
						<ul className="horizontal-list">
							<li>
								<p><b>{this.state.participants}</b> <br/> Participants</p>
							</li>
							<li>
								<p><b>{this.state.daysToGo}</b><br/> Days to go </p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default ChallengeCard