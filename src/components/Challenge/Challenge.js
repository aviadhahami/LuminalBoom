/**
 * Created by aviad on 8/29/2016.
 */

import './Challenge.css'
import React,{Component} from 'react'
import {browserHistory} from 'react-router'
import {Grid, Row, Col, Button} from 'react-bootstrap'

const history = browserHistory;

class Challenge extends  Component{
	constructor(props){
		super(props);
	}
	routeTo() {
		history.push(`/${this.route}`);
	}
	
	render(){
		return(
			<Grid>
				<div className="challenge-container">
					<Row>
						<Col md={12}>
							<p className="challenge-title">No Place Like Home</p>
							<p className="challenge-subtitle">By Mandalimos</p>
						</Col>
					</Row>
					<Row>
						<Col md={8}>
							<img className="challenge-picture" src="./assets/pictures/MendalimosBarPhoto.png" alt=""/>
						</Col>
						<Col md={4}>
							<ul className="stats-list">
								<li>
									<p className="bold">
										7,096
									</p>
									<p>
										reached
									</p>
								</li>
								<li>
									<p className="bold">
										988
									</p>
									<p>
										engaged
									</p>
								</li>
								<li>
									<p className="bold">
										19
									</p>
									<p>
										participated
									</p>
								</li>
								<li className="button-container">
									<Button bsStyle="success" className="button-text"
											onClick={this.routeTo.bind({route:'mandalimos'})}>
										Participate Now
									</Button>
								</li>
							</ul>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<ul className="tags-list">
								<li>
									<div className="tag">
										<i className="fa fa-map-marker"></i>
										<p>TLV,IL</p>
									</div>
								</li>
								<li>
									<div className="tag">
										<i className="fa fa-tag"></i>
										<p>Family</p>
									</div>
								</li>
							</ul>
						
						</Col>
					</Row>
				</div>
			</Grid>
		)
	}
	
}

export default Challenge