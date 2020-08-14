import React from "react";
import "./footer.css";
import Logo from "../../images/logo.svg";

export default function Footer() {
return (
	<footer>	
		<a href="./"><img src={Logo} alt="logo-img"/></a>
		
		<section className="references">
			<a href="./">FAQs</a>
			<a href="./">Contact Us</a>
			<a href="./">Privacy Policy</a>
			<a href="./">Press Kit</a>
			<a href="./">Install Guide</a>
		</section>
		
		<section className="social-media-links">
			<a href="./"><i className="fab fa-facebook-square"></i></a>
			<a href="./"><i className="fab fa-twitter"></i></a>
			<a href="./"><i className="fab fa-instagram"></i></a>
		</section>
	</footer>
)
}