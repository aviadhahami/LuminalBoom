import '../globals.css'
import '../navbar.css'
import React from 'react'
import { Router, browserHistory, hashHistory } from 'react-router'
import routes from '../routes'
import FontAwesome from 'react-fontawesome';

const history = window.location.hostname === 'vesparny.github.io'
	? hashHistory // for GitHub pages
	: browserHistory

const routeTo = function () {
	history.push(`/${this.route}`);
};
const Root = () =>
	<div>
		<div className="navbar customNav flex-row">
			<div className="col-md-4">
				<ul className="nav-list">
					<li>
						<a href="">Discover</a>
					</li>
					<li>
						<a href="">Start a challenge</a>
					</li>
					<li>
						<a href="">About us</a>
					</li>
				</ul>
			</div>
			<div className="col-md-3 center">
				<a className="app-name">
					LuminalBoom <span className="fa fa-rocket"></span>
				</a>
			</div>
			<div className="col-md-4">
				<ul className="nav-list float-right">
					<li>
						<a href="">Search</a>
					</li>
					<li>
						<a href="">Login</a>
					</li>
					<li>
						<a href="">Sign up</a>
					</li>
				</ul>
			</div>
		</div>
		<Router
			children={routes}
			history={history}
		/>
	</div>


export default Root
