import React from "react";
import "./workflow-tools.css";

import BlacklistIcon from "../../../images/icon-blacklist.svg";
import TextIcon from "../../../images/icon-text.svg";
import PreviewIcon from "../../../images/icon-preview.svg";

export default function WorkflowTools() {
return (
	<section id="workflow-tools">

		<div className="title">
			<h2>Supercharge your workflow</h2>
			<p>We’ve got the tools to boost your productivity.</p>
		</div>

		<div className="description">

			<div className="column">
				<img src={BlacklistIcon} alt="icon-blacklist"/>
				<h3>Create blacklists</h3>		
				<p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
			</div>

			<div className="column">
				<img src={TextIcon} alt="icon-txt"/>
				<h3>Plain text snippets</h3>		
				<p>Remove unwanted formatting from copied text for a consistent look.</p>
			</div>

			<div className="column">
				<img src={PreviewIcon} alt="icon-preview"/>
				<h3>Sneak preview</h3>		
				<p>Quick preview of all snippets on your Clipboard for easy access.</p>
			</div>

		</div>
		
	</section>
)
}