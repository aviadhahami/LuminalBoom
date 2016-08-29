/**
 * Created by aviad on 8/29/2016.
 */
import './DemoAlert.css'
import './../Home.css'
import React,{Component} from 'react'
import {browserHistory} from 'react-router'
import {Grid, Row, Col, FormControl, Button} from 'react-bootstrap'

class DemoAlert extends Component{
	
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div className="full-width full-height">
				<Grid>
					<Row className="show-grid graffiti-bg">
						<Col md={12} className="logo-container">
							<div className="lominal-circle-error">
								<p className="lominal-text-error">
									Oopsy!
								</p>
								<p className="lominal-text-error-subtitle">
									This is just a prototype.
								</p>
							</div>
						</Col>
					</Row>
					<Row className="show-grid width-100">
						<Col md={12} className="signup-container">
							<div className="signup-title">
								<p>If you want to hear more from us in the future, please enter your email here:</p>
							</div>
							<div className="input-field">
								<input className='input' type="text" placeholder="Enter your email address"/>
								<a href="#" className="send-button" onClick={()=>{history.push('/home')}}>Send</a>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default DemoAlert