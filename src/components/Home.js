import './Home.css'

import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class Home extends Component {
	constructor () {
		super()
	}
	
	render () {
		return (
			<div className="full-width">
			<Grid>
				
					<Row className="show-grid graffiti-bg">
						<Col md={4}>
						
						</Col>
					</Row>
				
			</Grid>
				</div>
		)
	}
}

export default Home
