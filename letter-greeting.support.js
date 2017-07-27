(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["letter-greeting"] = factory();
	else
		root["letter-greeting"] = factory();
})(this, function() {
return webpackJsonpletter_greeting([4],{

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Biyaheroes Developers
              		@email: developers@biyaheroes.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "bh-mj-letter-greeting",
              			"path": "bh-mj-letter-greeting/letter-greeting.jsx",
              			"file": "letter-greeting.jsx",
              			"module": "letter-greeting",
              			"author": "Biyaheroes Developers",
              			"contributors": [
              				"Robot Biyaheroes <robot@biyaheroes.com>",
              				"Richeve S. Bebedor <richeve.bebedor@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"eMail": "developers@biyaheroes.com",
              			"repository": "https://github.com/Biyaheroes/bh-mj-letter-greeting.git",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Biyaheroes MJML LetterGreeting Component.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"MJMLElement": "mjml-core",
              			"React": "react",
              			"Component": "react.Component",
              			"Column": "mjml-column",
              			"Table": "mjml-table",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = __webpack_require__(305);var _extends3 = _interopRequireDefault(_extends2);var _getPrototypeOf = __webpack_require__(313);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(317);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(318);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(322);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(344);var _inherits3 = _interopRequireDefault(_inherits2);var _class;

var _mjmlCore = __webpack_require__(30);
var _react = __webpack_require__(45);var _react2 = _interopRequireDefault(_react);
var _mjmlColumn = __webpack_require__(671);var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);
var _mjmlSection = __webpack_require__(676);var _mjmlSection2 = _interopRequireDefault(_mjmlSection);
var _mjmlText = __webpack_require__(677);var _mjmlText2 = _interopRequireDefault(_mjmlText);

var _falzy = __webpack_require__(678);var _falzy2 = _interopRequireDefault(_falzy);
var _wichevr = __webpack_require__(679);var _wichevr2 = _interopRequireDefault(_wichevr);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var tagName = "mj-letter-greeting";

var parentTag = ["mj-container", "mj-section"];

var endingTag = false;

var defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"greeting": "",
		"name": "" } };var




LetterGreeting = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {(0, _inherits3.default)(LetterGreeting, _Component);function LetterGreeting() {(0, _classCallCheck3.default)(this, LetterGreeting);return (0, _possibleConstructorReturn3.default)(this, (LetterGreeting.__proto__ || (0, _getPrototypeOf2.default)(LetterGreeting)).apply(this, arguments));}(0, _createClass3.default)(LetterGreeting, [{ key: "render", value: function render()
		{var
			mjAttribute = this.props.mjAttribute;var _props =

			this.props,greeting = _props.greeting,name = _props.name;

			greeting = (0, _wichevr2.default)(greeting, mjAttribute("greeting"));

			name = (0, _wichevr2.default)(name, mjAttribute("name"));

			if ((0, _falzy2.default)(name)) {
				greeting = "";
			}

			return _react2.default.createElement(_mjmlSection2.default, (0, _extends3.default)({},
				this.props, {
					padding: "40px 0px 10px 0px" }),

				_react2.default.createElement(_mjmlColumn2.default, null,
					_react2.default.createElement(_mjmlText2.default, {
							style: {
								"padding": "0px 30px 0px 30px",
								"fontSize": "17px",
								"letterSpacing": "0.5px" } },


						greeting + " " + name + ",")));



		} }]);return LetterGreeting;}(_react.Component)) || _class;


LetterGreeting.tagName = tagName;
LetterGreeting.parentTag = parentTag;
LetterGreeting.endingTag = endingTag;
LetterGreeting.defaultMJMLDefinition = defaultMJMLDefinition;exports.default =

LetterGreeting;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldHRlci1ncmVldGluZy5qc3giXSwibmFtZXMiOlsidGFnTmFtZSIsInBhcmVudFRhZyIsImVuZGluZ1RhZyIsImRlZmF1bHRNSk1MRGVmaW5pdGlvbiIsIkxldHRlckdyZWV0aW5nIiwibWpBdHRyaWJ1dGUiLCJwcm9wcyIsImdyZWV0aW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERBO0FBQ0EsOEI7QUFDQSx5QztBQUNBLDJDO0FBQ0EscUM7O0FBRUEsOEI7QUFDQSxrQzs7QUFFQSxJQUFNQSxVQUFVLG9CQUFoQjs7QUFFQSxJQUFNQyxZQUFZLENBQUUsY0FBRixFQUFrQixZQUFsQixDQUFsQjs7QUFFQSxJQUFNQyxZQUFZLEtBQWxCOztBQUVBLElBQU1DLHdCQUF3QjtBQUM3QixZQUFXLEVBRGtCO0FBRTdCLGVBQWM7QUFDYixjQUFZLEVBREM7QUFFYixVQUFRLEVBRkssRUFGZSxFQUE5QixDOzs7OztBQVNNQyxjO0FBQ0k7QUFDQUMsY0FEQSxHQUNnQixLQUFLQyxLQURyQixDQUNBRCxXQURBOztBQUdpQixRQUFLQyxLQUh0QixDQUdGQyxRQUhFLFVBR0ZBLFFBSEUsQ0FHUUMsSUFIUixVQUdRQSxJQUhSOztBQUtSRCxjQUFXLHVCQUFTQSxRQUFULEVBQW1CRixZQUFhLFVBQWIsQ0FBbkIsQ0FBWDs7QUFFQUcsVUFBTyx1QkFBU0EsSUFBVCxFQUFlSCxZQUFhLE1BQWIsQ0FBZixDQUFQOztBQUVBLE9BQUkscUJBQU9HLElBQVAsQ0FBSixFQUFtQjtBQUNsQkQsZUFBVyxFQUFYO0FBQ0E7O0FBRUQsVUFBUztBQUNELFNBQUtELEtBREo7QUFFTixjQUFRLG1CQUZGOztBQUlOO0FBQ0U7QUFDQyxjQUFRO0FBQ1AsbUJBQVcsbUJBREo7QUFFUCxvQkFBWSxNQUZMO0FBR1AseUJBQWlCLE9BSFYsRUFEVDs7O0FBT09DLGNBUFAsU0FPcUJDLElBUHJCLE9BREYsQ0FKTSxDQUFUOzs7O0FBZ0JBLEc7OztBQUdGSixlQUFlSixPQUFmLEdBQXlCQSxPQUF6QjtBQUNBSSxlQUFlSCxTQUFmLEdBQTJCQSxTQUEzQjtBQUNBRyxlQUFlRixTQUFmLEdBQTJCQSxTQUEzQjtBQUNBRSxlQUFlRCxxQkFBZixHQUF1Q0EscUJBQXZDLEM7O0FBRWVDLGMiLCJmaWxlIjoibGV0dGVyLWdyZWV0aW5nLmpzeCIsInNvdXJjZVJvb3QiOiIvbW50L2MvVXNlcnMvdmluc2UvRG9jdW1lbnRzL0JpeWFoZXJvZXMvYmgvYmgtbWotbGV0dGVyLWdyZWV0aW5nIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgQml5YWhlcm9lcyBEZXZlbG9wZXJzXHJcblx0XHRAZW1haWw6IGRldmVsb3BlcnNAYml5YWhlcm9lcy5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJiaC1tai1sZXR0ZXItZ3JlZXRpbmdcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiYmgtbWotbGV0dGVyLWdyZWV0aW5nL2xldHRlci1ncmVldGluZy5qc3hcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwibGV0dGVyLWdyZWV0aW5nLmpzeFwiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImxldHRlci1ncmVldGluZ1wiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIkJpeWFoZXJvZXMgRGV2ZWxvcGVyc1wiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJSb2JvdCBCaXlhaGVyb2VzIDxyb2JvdEBiaXlhaGVyb2VzLmNvbT5cIixcclxuXHRcdFx0XHRcIlJpY2hldmUgUy4gQmViZWRvciA8cmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJlTWFpbFwiOiBcImRldmVsb3BlcnNAYml5YWhlcm9lcy5jb21cIixcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0JpeWFoZXJvZXMvYmgtbWotbGV0dGVyLWdyZWV0aW5nLmdpdFwiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRCaXlhaGVyb2VzIE1KTUwgTGV0dGVyR3JlZXRpbmcgQ29tcG9uZW50LlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcIk1KTUxFbGVtZW50XCI6IFwibWptbC1jb3JlXCIsXHJcblx0XHRcdFwiUmVhY3RcIjogXCJyZWFjdFwiLFxyXG5cdFx0XHRcIkNvbXBvbmVudFwiOiBcInJlYWN0LkNvbXBvbmVudFwiLFxyXG5cdFx0XHRcIkNvbHVtblwiOiBcIm1qbWwtY29sdW1uXCIsXHJcblx0XHRcdFwiVGFibGVcIjogXCJtam1sLXRhYmxlXCIsXHJcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuaW1wb3J0IHsgTUpNTEVsZW1lbnQgfSBmcm9tIFwibWptbC1jb3JlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbHVtbiBmcm9tIFwibWptbC1jb2x1bW5cIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIm1qbWwtc2VjdGlvblwiO1xyXG5pbXBvcnQgVGV4dCBmcm9tIFwibWptbC10ZXh0XCI7XHJcblxyXG5pbXBvcnQgZmFsenkgZnJvbSBcImZhbHp5XCI7XHJcbmltcG9ydCB3aWNoZXZyIGZyb20gXCJ3aWNoZXZyXCI7XHJcblxyXG5jb25zdCB0YWdOYW1lID0gXCJtai1sZXR0ZXItZ3JlZXRpbmdcIjtcclxuXHJcbmNvbnN0IHBhcmVudFRhZyA9IFsgXCJtai1jb250YWluZXJcIiwgXCJtai1zZWN0aW9uXCIgXTtcclxuXHJcbmNvbnN0IGVuZGluZ1RhZyA9IGZhbHNlO1xyXG5cclxuY29uc3QgZGVmYXVsdE1KTUxEZWZpbml0aW9uID0ge1xyXG5cdFwiY29udGVudFwiOiBcIlwiLFxyXG5cdFwiYXR0cmlidXRlc1wiOiB7XHJcblx0XHRcImdyZWV0aW5nXCI6IFwiXCIsXHJcblx0XHRcIm5hbWVcIjogXCJcIlxyXG5cdH0sXHJcbn07XHJcblxyXG5ATUpNTEVsZW1lbnRcclxuY2xhc3MgTGV0dGVyR3JlZXRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHJlbmRlciggKXtcclxuXHRcdGNvbnN0IHsgbWpBdHRyaWJ1dGUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0bGV0IHsgZ3JlZXRpbmcsIG5hbWUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0Z3JlZXRpbmcgPSB3aWNoZXZyKCBncmVldGluZywgbWpBdHRyaWJ1dGUoIFwiZ3JlZXRpbmdcIiApICk7XHJcblxyXG5cdFx0bmFtZSA9IHdpY2hldnIoIG5hbWUsIG1qQXR0cmlidXRlKCBcIm5hbWVcIiApICk7XHJcblxyXG5cdFx0aWYoIGZhbHp5KCBuYW1lICkgKXtcclxuXHRcdFx0Z3JlZXRpbmcgPSBcIlwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoIDxTZWN0aW9uXHJcblx0XHRcdFx0XHR7IC4uLnRoaXMucHJvcHMgfVxyXG5cdFx0XHRcdFx0cGFkZGluZz1cIjQwcHggMHB4IDEwcHggMHB4XCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8Q29sdW1uPlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0XHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJwYWRkaW5nXCI6IFwiMHB4IDMwcHggMHB4IDMwcHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJmb250U2l6ZVwiOiBcIjE3cHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJsZXR0ZXJTcGFjaW5nXCI6IFwiMC41cHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHsgYCR7IGdyZWV0aW5nIH0gJHsgbmFtZSB9LGB9XHJcblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0PC9Db2x1bW4+XHJcblx0XHRcdFx0PC9TZWN0aW9uPiApO1xyXG5cdH1cclxufVxyXG5cclxuTGV0dGVyR3JlZXRpbmcudGFnTmFtZSA9IHRhZ05hbWU7XHJcbkxldHRlckdyZWV0aW5nLnBhcmVudFRhZyA9IHBhcmVudFRhZztcclxuTGV0dGVyR3JlZXRpbmcuZW5kaW5nVGFnID0gZW5kaW5nVGFnO1xyXG5MZXR0ZXJHcmVldGluZy5kZWZhdWx0TUpNTERlZmluaXRpb24gPSBkZWZhdWx0TUpNTERlZmluaXRpb247XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZXR0ZXJHcmVldGluZztcclxuXHJcblxyXG4iXX0=

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 422:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 600:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[304]);
});
//# sourceMappingURL=letter-greeting.support.js.map