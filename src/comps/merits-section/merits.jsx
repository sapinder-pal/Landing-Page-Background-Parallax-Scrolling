import React from "react";
import TrackSnippets from "./track-snippets/track-snippets.jsx";
import AccessAnywhere from "./access-anywhere/access-anywhere.jsx";
import WorkflowTools from "./workflow-tools/workflow-tools.jsx";

export default function Merits() {
return (
	<section id="merits-section">

		{/* merit-1 */}
		<TrackSnippets/>

		{/* merit-2 */}
		<AccessAnywhere/>

		{/* merit-3 */}
		<WorkflowTools/>
			
	</section>
)
}