import React from "react";

export default class Aside extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	componentDidMount(){
		$.ajax({
			url: '/path/to/file',
			type: 'default GET (Other values: POST)',
			dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
			data: {param1: 'value1'},
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}
	render(){
		return (
			<div id="aside">
				<div className="asideTop">
					<img className="avatar" src="images/avatar.jpg" />
					<p className="job">超级管理员</p>
					<div className="msg-num">
						<div className="sended">
							<p className="num">4</p>
							<p className="tip">已发送</p>
						</div>
						<div className="will-send">
							<p className="num">8</p>
							<p className="tip">待发送</p>
						</div>
					</div>
				</div>
				<ul className="social-list">
					<li></li>
				</ul>
				<SocialManage />
			</div>
		)
	}
}

class SocialManage extends React.Component{
	render(){
		return (
			<div className="">
				<a className="manage-social-btn" href="javascript:;">管理账号</a>
				<div className="pop-social-manage">
					<div className="pop-box">
						<div className="pop-title">管理</div>
						<div className="pop-main"></div>
						<div className="pop-btns"></div>
					</div>
				</div>
			</div>
		)
	}
}