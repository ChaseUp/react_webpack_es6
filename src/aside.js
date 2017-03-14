import React from "react";

export default class Aside extends React.Component{
	render(){
		return (
			<div id="aside">
				<div className="asideTop">
					<img className="avatar" src="images/avatar.jpg" />
					<p className="job">超级管理员</p>
					<div className="msg-num">
						<div className="sended">
							<p className="num">4</p>
							<p className="tip">已发送信息</p>
						</div>
						<div className="will-send">
							<p className="num">8</p>
							<p className="tip">待发送信息</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}