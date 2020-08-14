import React from "react";
import "./access-anywhere.css";
import DevicesImg from "../../../images/image-devices.png";

export default function AccessAnywhere() {
return (
	<section id="access-anywhere">
		<div className="title">
		<h2> Clipboard anywhere</h2>
		<p>Whether you’re on the go, or at your computer, you can access all your Clipboard
		snippets in a few simple clicks.</p>
		</div>

		<img src={DevicesImg} alt="devices-img"/>
	</section>
)
};
