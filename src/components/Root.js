import '../globals.css'
import '../navbar.css'
import React from 'react'
import { Router, browserHistory, hashHistory } from 'react-router'
import routes from '../routes'
import FontAwesome from 'react-fontawesome';
import Footer from './Footer'

import {Grid, Row} from 'react-bootstrap'

const history = window.location.hostname === 'vesparny.github.io'
	? hashHistory // for GitHub pages
	: browserHistory

const routeTo = function () {
	history.push(`/${this.route}`);
};
const Root = () =>
	<Grid>
		<Row>
			
			<div className="navbar customNav">
				<div className="col-md-5">
					<ul className="nav-list">
						<li>
							<a href="#" onClick={routeTo.bind({route:'discover'})}>Discover</a>
						</li>
						<li>
							<a href="#" onClick={routeTo.bind({route:'start-a-challenge'})}>Start a challenge</a>
						</li>
						<li>
							<a href="#"  onClick={routeTo.bind({route:'about'})}>About us</a>
						</li>
					</ul>
				</div>
				<div className="col-md-2">
					<a href="#" className="app-name" onClick={routeTo.bind({route:''})}>
						LuminalBoom
					</a>
				</div>
				<div className="col-md-5">
					<ul className="nav-list float-right">
						<li>
							<a href="#"><i className="fa fa-search"></i></a>
						</li>
						<li>
							<a href="#">Login</a>
						</li>
						<li>
							<a href="#">Sign up</a>
						</li>
					</ul>
				</div>
			</div>
		</Row>
		<Row>
			
			<Router
				children={routes}
				history={history}
			/>
		</Row>
		<Row>
			<Footer />
		</Row>
	</Grid>


export default Root
