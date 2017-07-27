"use strict";

import React from "react";
import ReactDOM from "react-dom";

import LetterGreeting from "./letter-greeting.js";

ReactDOM.render( 
	<LetterGreeting
		greeting="Hello" 
		name="Vinse Vinalon"
		>
		</LetterGreeting>,
	document.getElementById( "root" )
 );
