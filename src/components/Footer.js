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
				<Row className="show-grid width-100">
					<Col md={12} className="footer-container width-100">
						footer
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default Footer;