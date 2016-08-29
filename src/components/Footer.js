/**
 * Created by aviad on 8/29/2016.
 */
import './Footer.css'

import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap';



class Footer extends Component{
	
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Grid className="footer width-100">
				<Row className="show-grid width-100 footer-container">
					<Col md={10}>
						<div className="lominal-circle-footer">
							<p className="lominal-text-footer">
								LominalBoom
							</p>
						</div>
					</Col>
					<Col md={2} className="float-right">
						<img className="zell-logo" src="./assets/ZellLogo.png" alt=""/>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default Footer;