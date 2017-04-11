import React,{Component} from "react";
import $ from "jquery";

export default class Aside extends Component{
	constructor(props){
		super(props);
		this.state = {msg: {}};
	}
	componentDidMount(){
		$.ajax({
			url: "/aside",
			type: "GET",
			datatype: "json",
			success: function(xhr){
				try {
					xhr = JSON.parse(xhr);
				} catch (err) {

				}
				this.setState({msg: xhr});
			}.bind(this)
		});
	}
	render(){
		return (
			<div id="aside" className="tt">
				<div className="asideTop">
					<img className="avatar" src="/dist/images/avatar.jpg" />
					<p className="job">{this.state.msg.job}</p>
					<div className="msg-num">
						<div className="sended">
							<p className="num">{this.state.msg.sended}</p>
							<p className="tip">已发送信息</p>
						</div>
						<div className="will-send">
							<p className="num">{this.state.msg.unsend}</p>
							<p className="tip">待发送信息</p>
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

class SocialManage extends Component{
	render(){
		return (
			<div className="">
				<a className="manage-social-btn" href="javascript:;">管理社交媒体账号</a>
				<div className="pop-social-manage">
					<div className="pop-box">
						<div className="pop-title">管理社交媒体</div>
						<div className="pop-main"></div>
						<div className="pop-btns"></div>
					</div>
				</div>
			</div>
		)
	}
}