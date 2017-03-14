import React from "react";
import SlideDown from "./components/SlideDown.js";

export default class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			headerMsg: {}
		}
	}
	componentDidMount(){
		// $.ajax({
		// 	url: this.props.url,
		// 	type: "GET",
		// 	dataType: "json",
		// 	success: (xhr) => {
		// 		this.setState({headerMsg: xhr});
		// 	}
		// })
		var xhr = {
			"siteUrl": "www.baidu.com",
			"noticeNum": "23",
			noticeUrl: "www.google.com",
			"avatarUrl": "images/avatar.jpg",
			"userName": "ChaseUp",
			"navMsg": [
				{"name": "我的网站","url": "myDashboard.html"},
				{"name": "运营罗盘","url": "myDashboard.html"},
				{"name": "社交助手","url": "myDashboard.html"},
				{"name": "我的员工","url": "myDashboard.html"}
			]
		};
		this.setState({headerMsg: xhr});
	}
	render(){
		return (
			<div className="header-inner">
				<img className="logo" src="images/logo.png" />
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

