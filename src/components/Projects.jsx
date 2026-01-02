import videoProject1 from "../videos/videoProject1.mp4";

export default function Projects() {
	return (
		<>
			<section id="projects">
				<span class="title">Projects</span>
				<div class="projects-container">
					<div class="project-card">
						<div class="desc">
							<p class="project-title">To-do</p>
							<br />
							<p>Technical highlights:</p>
							<br />
							<div class="align">
								<span>✦</span>
								<span>Advanced DOM manipulation: Dynamic element creation</span>
							</div>
							<div class="align">
								<span>✦</span>
								<span>Event Delegation: Efficient event handling</span>
							</div>
							<div class="align">
								<span>✦</span>
								<span>Enhanced UX: Auto-growing textareas</span>
							</div>
							<div class="align">
								<span>✦</span>
								<span>Unique identifier system: Using timestamps</span>
							</div>
							<div class="align">
								<span>✦</span>
								<span>Custom modals: For task editing</span>
							</div>
							<div class="align">
								<span>✦</span>
								<span>State management: Element lifecycle control</span>
							</div>
						</div>
						<video width="100%" controls>
							<source src={videoProject1} type="video/mp4" />
						</video>
					</div>
				</div>
			</section>
		</>
	);
}
