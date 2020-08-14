import React, { useState } from "react";
import "./track-snippets.css";
import ComputerImg from "../../../images/image-computer.png";

import {listenScroll,isPartiallyVisible,getNearestElement} from "./floating-link.js";


export default function TrackSnippets() {

	// Floating Download Link
	let [display,setDisplay] = useState("none");
	let [nearestElement,setNearestElement] = useState(""); /* for referring to nearest section when clicked */

	const Animate = ()=> {
		let topDownloadLink = document.querySelector("#top-section a");
		let bottomDownloadLink = document.querySelector("#download-section a");

		let eitherIsVisible = isPartiallyVisible(topDownloadLink) || isPartiallyVisible(bottomDownloadLink);

		// display the floating-link if Download link is not visible
		setDisplay(eitherIsVisible ? "none":"initial" );
		// refer to nearest section when clicked
		setNearestElement(getNearestElement(topDownloadLink.parentNode,bottomDownloadLink.parentNode,
			document.querySelector(".floating-link")));
	};
	// 'Animate' will be calledback from within 'scroll' event
	listenScroll(Animate);

	let floatingLinkStyle = {
		display: display,
		width: "0",
		color: "transparent"
	}

	

return (
	<section id="track-snippets">
		{/* floating link */}
		<a href={nearestElement} className="floating-link" style={floatingLinkStyle}>Download</a>

		<div className="title">
			<h2>Keep track of your snippets</h2>
			<p>Clipboard instantly stores any item you copy in the cloud,
			meaning you can access your snippets immediately on all your
			devices. Our Mac and iOS apps will help you organize everything.</p>
		</div>
		
		<div className="description">
			<img src={ComputerImg} alt="computer-img"/>
			<div className="description-text">
				<h3>Quick Search</h3>
				<p>Easily search your snippets by content, category, web address, application, and more.</p>
				
				<h3>iCloud Sync</h3>
				<p>Instantly saves and syncs snippets across all your devices.</p>
				
				<h3>Complete History</h3>
				<p>Retrieve any snippets from the first moment you started using the app.</p>
			</div>
		</div>
	</section>
)}