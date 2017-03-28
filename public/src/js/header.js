import React from "react";
import $ from "jquery";
import SlideDown from "./components/SlideDown.js";

export default class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			headerMsg: {}
		}
	}
	componentDidMount(){
		$.ajax({
			url: "/headerMsg",
			type: "GET",
			dataType: "json",
			success: (xhr) => {
				this.setState({headerMsg: xhr});
			},
			error: function(err){
				console.log(err);
			}
		});
	}
	render(){
		return (
			<div className="header-inner">
				<img className="logo" src="/dist/images/logo.png" />
				<a className="to-mysite" href={this.state.headerMsg.siteUrl}>进入我的网站</a>
				<SlideDown userName={this.state.headerMsg.userName} navMsg={this.state.headerMsg.navMsg} />
				<img className="avatar" src={this.state.headerMsg.avatarUrl} />
				<a className="notice" href={this.state.headerMsg.noticeUrl}>
					<i className="fa fa-bell-o" aria-hidden="true"></i>
					<span className="num">{this.state.headerMsg.noticeNum}</span>
				</a>
			</div>
		)
	}
}

