import React from "react";

export default class SlideDown extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			contsShow: false,
			clicked: false
		}
	}
	slideToggle(){
		this.setState({
			contsShow: !this.state.contsShow,
			clicked: !this.state.clicked
		});
	}
	render(){
		if (this.props.navMsg === undefined || this.props.userName === undefined) {
			return false;
		}
		return (
			<div className={"g-slide-container" + (this.state.clicked ? " on" : "")}>
				<div className="g-slide-title" onClick={this.slideToggle.bind(this)}>
					{this.props.userName}
					<i className="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<div className="g-slide-contbox">
					<ul className={"g-slide-conts" + (this.state.contsShow ? " conts-show" : "")}>
						{
							this.props.navMsg.map(function(item,index){
								return (
									<li className="g-slide-items" key={index}><a href={item.url}>{item.name}</a></li>
								)
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}