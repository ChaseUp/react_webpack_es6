import React from "react";
import ReactDom from "react-dom";
import $ from "jquery";
import Header from "./header.js";
import Container from "./container.js";
import "../css/style.scss";

const UrlPath = {
	header: "dist/js/json/header.json"
};

ReactDom.render(
	<Header url={UrlPath.header} />,
	document.getElementById("header")
);
ReactDom.render(
	<Container />,
	document.getElementById("container")
);