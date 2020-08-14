import React from "react";
import "./testimonials.css";

import Google from "../../images/logo-google.png";
import IBM from "../../images/logo-ibm.png";
import Microsoft from "../../images/logo-microsoft.png";
import HP from "../../images/logo-hp.png";
import VectorGraphics from "../../images/logo-vector-graphics.png";

export default function Testimonials() {
return (
	<section id="testimonials">
		<div>
			<img src={Google} alt="logo-google"/>
		</div>
		<div>
			<img src={IBM} alt="logo-ibm"/>
		</div>
		<div>
			<img src={Microsoft} alt="logo-microsoft"/>
		</div>
		<div>
			<img src={HP} alt="logo-hp"/>
		</div>
		<div>
			<img src={VectorGraphics} alt="logo-vector-graphics"/>
		</div>
	</section>
)
}