import videoProject1 from "../videos/videoProject1.mp4";

export default function Projects() {
	return (
		<>
			<section id="projects">
				<span class="section-title">Projects</span>
				<div class="projects-container">
					<div class="project-item">
						<div class="project-container">
							<div class="description">
								<p class="project-title">To-do</p>
								<div class="highlight">
									<span class="star">✦</span>
									<span>
										Advanced DOM manipulation: Dynamic element creation
									</span>
								</div>
								<div class="highlight">
									<span class="star">✦</span>
									<span>Event Delegation: Efficient event handling</span>
								</div>
								<div class="highlight">
									<span class="star">✦</span>
									<span>Enhanced UX: Auto-growing textareas</span>
								</div>
								<div class="highlight">
									<span class="star">✦</span>
									<span>Unique identifier system: Using timestamps</span>
								</div>
								<div class="highlight">
									<span class="star">✦</span>
									<span>Custom modals: For task editing</span>
								</div>
								<div class="highlight">
									<span class="star">✦</span>
									<span>State management: Element lifecycle control</span>
								</div>
							</div>
							<div class="video-area">
								<video width="100%" controls>
									<source src={videoProject1} type="video/mp4" />
								</video>
								<a href="https://github.com/camilofi-dev/to-do">
									github.com/camilofi-dev/to-do
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
