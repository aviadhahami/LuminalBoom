/**
 * Created by aviad on 8/29/2016.
 */

import './Challenge.css'
import React,{Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class Challenge extends  Component{
	constructor(props){
		super(props);
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
							</ul>
						</Col>
					</Row>
				</div>
			</Grid>
		)
	}
	
}

export default Challenge