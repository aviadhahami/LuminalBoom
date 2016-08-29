import './Home.css'

import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import Challenge from './Challenge/Challenge'
import ChallengeList from './Challenge-List/Challenge-List'

class Home extends Component {
	constructor () {
		super()
	}
	
	render () {
		return (
			<div className="full-width full-height">
				<Grid>
					<Row className="show-grid graffiti-bg">
						<Col md={12} className="logo-container">
							<div className="lominal-circle">
								<p className="lominal-text">
									LominalBoom
								</p>
							</div>
						</Col>
					</Row>
					<Row className="show-grid width-100">
						<Col md={12} className="section-b-container">
							<div className="section-title-container">
								<p className="section-title">
									Explore Vibrant Creative Universe
								</p>
							</div>
							<div className="featured-event">
								<Challenge />
							</div>
							<div className="event-list">
								<ChallengeList />
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default Home
