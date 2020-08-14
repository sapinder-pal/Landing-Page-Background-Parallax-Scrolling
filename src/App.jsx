import React, { useState, useEffect } from "react";
import "./App.css";
import BGDesktop from "./images/bg-header-desktop.png";
import BGMobile from "./images/bg-header-mobile.png";

import TopSection from "./comps/top-section/top.jsx";
import Merits from "./comps/merits-section/merits.jsx";
import Testimonials from "./comps/testimonials-section/testimonials.jsx";
import DownloadSection from "./comps/download-section/download-section.jsx";
import Footer from "./comps/footer/footer.jsx";


export default function App() {

	// Background Parallax Effect
	let [translateY,setTranslateY] = useState(0);

	useEffect(() => {

		const setScrollPos = () => {
			setTranslateY(window.scrollY * (-.1));
		}
		window.addEventListener("scroll", () => requestAnimationFrame(setScrollPos));
	}, [translateY]);


	
return (
	<>
		<img src={BGDesktop} className="bg-desktop" style={{transform: `translateY(${translateY}px)`}} alt="bg-img"/>
		<img src={BGMobile} className="bg-mobile" style={{transform: `translateY(${translateY}px)`}} alt="bg-img"/>		
		<TopSection/>
		<Merits/>
		<Testimonials/>
		<DownloadSection/>
		<Footer/>
	</>
)}