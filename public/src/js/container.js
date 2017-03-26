import React from "react";
import ReactDom from "react-dom";
import Aside from "./aside.js";
import Main from "./main.js";

export default class Container extends React.Component{
	render(){
		return(
			<div className="container-inner">
				<Aside />
				<Main />
			</div>
		)
	}
}