webpackJsonp([0],{

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Aside = function (_React$Component) {
	_inherits(Aside, _React$Component);

	function Aside() {
		_classCallCheck(this, Aside);

		return _possibleConstructorReturn(this, (Aside.__proto__ || Object.getPrototypeOf(Aside)).apply(this, arguments));
	}

	_createClass(Aside, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ id: "aside" },
				_react2.default.createElement(
					"div",
					{ className: "asideTop" },
					_react2.default.createElement("img", { className: "avatar", src: "images/avatar.jpg" }),
					_react2.default.createElement(
						"p",
						{ className: "job" },
						"\u8D85\u7EA7\u7BA1\u7406\u5458"
					),
					_react2.default.createElement(
						"div",
						{ className: "msg-num" },
						_react2.default.createElement(
							"div",
							{ className: "sended" },
							_react2.default.createElement(
								"p",
								{ className: "num" },
								"4"
							),
							_react2.default.createElement(
								"p",
								{ className: "tip" },
								"\u5DF2\u53D1\u9001\u4FE1\u606F"
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "will-send" },
							_react2.default.createElement(
								"p",
								{ className: "num" },
								"8"
							),
							_react2.default.createElement(
								"p",
								{ className: "tip" },
								"\u5F85\u53D1\u9001\u4FE1\u606F"
							)
						)
					)
				)
			);
		}
	}]);

	return Aside;
}(_react2.default.Component);

exports.default = Aside;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlideDown = function (_React$Component) {
	_inherits(SlideDown, _React$Component);

	function SlideDown(props) {
		_classCallCheck(this, SlideDown);

		var _this = _possibleConstructorReturn(this, (SlideDown.__proto__ || Object.getPrototypeOf(SlideDown)).call(this, props));

		_this.state = {
			contsShow: false
		};
		return _this;
	}

	_createClass(SlideDown, [{
		key: "slideToggle",
		value: function slideToggle() {
			this.setState({ contsShow: !this.state.contsShow });
		}
	}, {
		key: "render",
		value: function render() {
			if (this.props.navMsg === undefined || this.props.userName === undefined) {
				return false;
			}
			return _react2.default.createElement(
				"div",
				{ className: "g-slide-container" },
				_react2.default.createElement(
					"div",
					{ className: "g-slide-title", onClick: this.slideToggle.bind(this) },
					this.props.userName,
					_react2.default.createElement("i", { className: "fa fa-caret-down", "aria-hidden": "true" })
				),
				_react2.default.createElement(
					"div",
					{ className: "g-slide-contbox" },
					_react2.default.createElement(
						"ul",
						{ className: "g-slide-conts" + (this.state.contsShow ? " conts-show" : "") },
						this.props.navMsg.map(function (item, index) {
							return _react2.default.createElement(
								"li",
								{ className: "g-slide-items", key: index },
								_react2.default.createElement(
									"a",
									{ href: item.url },
									item.name
								)
							);
						})
					)
				)
			);
		}
	}]);

	return SlideDown;
}(_react2.default.Component);

exports.default = SlideDown;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
	_inherits(Main, _React$Component);

	function Main() {
		_classCallCheck(this, Main);

		return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
	}

	_createClass(Main, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement("div", { id: "main" });
		}
	}]);

	return Main;
}(_react2.default.Component);

exports.default = Main;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(27);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _header = __webpack_require__(88);

var _header2 = _interopRequireDefault(_header);

var _container = __webpack_require__(87);

var _container2 = _interopRequireDefault(_container);

__webpack_require__(89);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UrlPath = {
	header: "dist/js/json/header.json"
};

_reactDom2.default.render(_react2.default.createElement(_header2.default, { url: UrlPath.header }), document.getElementById("header"));
_reactDom2.default.render(_react2.default.createElement(_container2.default, null), document.getElementById("container"));

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(27);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _aside = __webpack_require__(187);

var _aside2 = _interopRequireDefault(_aside);

var _main = __webpack_require__(189);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
	_inherits(Container, _React$Component);

	function Container() {
		_classCallCheck(this, Container);

		return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
	}

	_createClass(Container, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "container-inner" },
				_react2.default.createElement(_aside2.default, null),
				_react2.default.createElement(_main2.default, null)
			);
		}
	}]);

	return Container;
}(_react2.default.Component);

exports.default = Container;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _SlideDown = __webpack_require__(188);

var _SlideDown2 = _interopRequireDefault(_SlideDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header(props) {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

		_this.state = {
			headerMsg: {}
		};
		return _this;
	}

	_createClass(Header, [{
		key: "componentDidMount",
		value: function componentDidMount() {
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
				"navMsg": [{ "name": "我的网站", "url": "myDashboard.html" }, { "name": "运营罗盘", "url": "myDashboard.html" }, { "name": "社交助手", "url": "myDashboard.html" }, { "name": "我的员工", "url": "myDashboard.html" }]
			};
			this.setState({ headerMsg: xhr });
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "header-inner" },
				_react2.default.createElement("img", { className: "logo", src: "images/logo.png" }),
				_react2.default.createElement(
					"a",
					{ className: "to-mysite", href: this.state.headerMsg.siteUrl },
					"\u8FDB\u5165\u6211\u7684\u7F51\u7AD9"
				),
				_react2.default.createElement(_SlideDown2.default, { userName: this.state.headerMsg.userName, navMsg: this.state.headerMsg.navMsg }),
				_react2.default.createElement("img", { className: "avatar", src: this.state.headerMsg.avatarUrl }),
				_react2.default.createElement(
					"a",
					{ className: "notice", href: this.state.headerMsg.noticeUrl },
					_react2.default.createElement("i", { className: "fa fa-bell-o", "aria-hidden": "true" }),
					_react2.default.createElement(
						"span",
						{ className: "num" },
						this.state.headerMsg.noticeNum
					)
				)
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[190]);
//# sourceMappingURL=bundle.js.map