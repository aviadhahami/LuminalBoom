/**
 * Created by aviad on 8/29/2016.
 */
import './MemberCard.css'
import React, {Component} from 'react'

class MemberCard extends Component{
	
	constructor(props){
		super(props);
		this.state = this.props.member;
	}
	render(){
		return(
			<div className="member-container">
				<div className="member-picture">
					<img src={this.state.picture} alt=""/>
				</div>
				<div className="member-info">
					<p><b>{this.state.name}</b> {this.state.about}</p>
				</div>
			</div>
		)
	}
}

export default MemberCard