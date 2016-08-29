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
				<div className="challenge-container" onClick={()=>{window.open('https://www.instagram.com/explore/tags/LominalBoom')}}>
					<Row>
						<Col md={12}>
							<p className="challenge-title">The Beer Bootle Challenge</p>
							<p className="challenge-subtitle">By LominalBoom</p>
						</Col>
					</Row>
					<Row>
						<Col md={8}>
							<img className="challenge-picture" src="./assets/pictures/PopBeerChallenge.png" alt=""/>
						</Col>
						<Col md={4}>
							<ul className="stats-list">
								<li>
									<p className="bold statistics">
										7,096
									</p>
									<p>
										reached
									</p>
								</li>
								<li>
									<p className="bold statistics">
										988
									</p>
									<p>
										engaged
									</p>
								</li>
								<li>
									<p className="bold statistics">
										19
									</p>
									<p>
										participated
									</p>
								</li>
								<li className="button-container">
									<Button bsStyle="success" className="button-text">
											{/*onClick={this.routeTo.bind({route:'mandalimos'})}>*/}
										Participate Now
									</Button>
								</li>
							</ul>
						</Col>
					</Row>
					<Row>
						<Col md={7}>
							<ul className="tags-list">
								<li>
									<div className="tag">
										<i className="fa fa-map-marker fa-2x"></i>
										<p>TLV,IL</p>
									</div>
								</li>
								<li>
									<div className="tag">
										<i className="fa fa-tag fa-2x"></i>
										<p>Family</p>
									</div>
								</li>
							</ul>
						</Col>
						<Col md={1}>
							<ul className="tags-list">
								<li>
									<div className="tag liked">
										<i className="fa fa-heart fa-2x"></i>
									</div>
								</li>
							</ul>
						</Col>
					</Row>
					<Row>
						<Col md={7} className="description-container">
							<p className="description-title">The Challenge:</p>
							<p className="description-text">
								Upload a photo that includes <i>#LominalBoom</i> and a bottle of beer - get wacky! The winning photo will get lifetime glory in Zell 16’.
							</p>
						</Col>
					</Row>
				</div>
			</Grid>
		)
	}
	
}

export default Challenge