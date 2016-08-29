import './Home.css'

import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'


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
									Section B
								</p>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default Home
