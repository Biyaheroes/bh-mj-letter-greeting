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
*/

import { MJMLElement } from "mjml-core";
import React, { Component } from "react";
import Column from "mjml-column";
import Section from "mjml-section";
import Text from "mjml-text";

import falzy from "falzy";
import wichevr from "wichevr";

const tagName = "mj-letter-greeting";

const parentTag = [ "mj-container", "mj-section" ];

const endingTag = false;

const defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"greeting": "",
		"name": ""
	},
};

@MJMLElement
class LetterGreeting extends Component {
	render( ){
		const { mjAttribute } = this.props;

		let { greeting, name } = this.props;

		greeting = wichevr( greeting, mjAttribute( "greeting" ) );

		name = wichevr( name, mjAttribute( "name" ) );

		if( falzy( name ) ){
			greeting = "";
		}

		return ( <Section
					{ ...this.props }
					padding="40px 0px 10px 0px"
				>
					<Column>
							<Text
								style={ {
									"padding": "0px 30px 0px 30px",
									"fontSize": "17px",
									"letterSpacing": "0.5px",
								} }
							>
								{ `${ greeting } ${ name },`}
							</Text>
					</Column>
				</Section> );
	}
}

LetterGreeting.tagName = tagName;
LetterGreeting.parentTag = parentTag;
LetterGreeting.endingTag = endingTag;
LetterGreeting.defaultMJMLDefinition = defaultMJMLDefinition;

export default LetterGreeting;


