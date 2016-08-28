import '../globals.css'
import React from 'react'
import { Router, browserHistory, hashHistory } from 'react-router'
import routes from '../routes'
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap'

const history = window.location.hostname === 'vesparny.github.io'
	? hashHistory // for GitHub pages
	: browserHistory

const routeTo = function () {
	history.push(`/${this.route}`);
};
const Root = () =>
	<div>
		<Navbar>
			<Nav pullLeft>
				<NavItem eventKey={1} onClick={routeTo.bind({route:'test'})}>Discover</NavItem>
				<NavItem eventKey={2} onClick={routeTo.bind({route:'test'})}>Start a challenge</NavItem>
				<NavItem eventKey={3} onClick={routeTo.bind({route:'test'})}>About us</NavItem>
			</Nav>
							
				<Navbar.Header>
					<Navbar.Brand>
						<a onClick={routeTo.bind({route:''})}>Luminal Boom</a>
					</Navbar.Brand>
				</Navbar.Header>
			<Nav pullRight>
				<NavItem eventKey={4} href="#">Search</NavItem>
				<NavItem eventKey={5} href="#">Login</NavItem>
				<NavItem eventKey={6} href="#">Signup</NavItem>
			</Nav>
		</Navbar>
		<Router
			children={routes}
			history={history}
		/>
	</div>


export default Root
