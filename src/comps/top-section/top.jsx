import React from "react";
import "./top.css";
import Logo from "../../images/logo.svg";

export default function TopSection() {
	return (
	<section id="top-section">
		<img src={Logo} alt="logo-img"/>

		<div className="text-wrapper">
			<h1>A history of everything you copy</h1>
			<p>Clipboard allows you to track and organize everything you
			copy. Instantly access your clipboard on all your devices.</p>
		</div>

		<a href="./">Download for iOS</a>
		<a href="./">Download for Mac</a>
	</section>
	)
}