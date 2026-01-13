import todo from "../images/to-do.png";
import portfolio from "../images/portfolio.png";

export default function Projects() {
	return (
		<>
			<section id="projects">
				<span class="section-title">Projects</span>
				<div class="project-list">
					<div class="project-item">
						<p class="project-title">Portfolio</p>
						<img src={portfolio} alt="to-do" />
						<span class="link">
							<a href="https://camilofi-dev.github.io/portfolio/">
								camilofi-dev.github.io/portfolio/
							</a>
						</span>
						<div class="labels">
							<span class="label">React</span>
							<span class="label">JavaScript</span>
							<span class="label">CSS</span>
							<span class="label">HTML</span>
						</div>
						<div class="projects-item-desc">
							<div class="highlight">
								<span>✦ </span>
								<span>
									Component-based architecture for scalable UI structure
								</span>
							</div>

							<div class="highlight">
								<span>✦ </span>
								<span>
									Reusable sections for About, Experience, Projects, and
									Education
								</span>
							</div>

							<div class="highlight">
								<span>✦ </span>
								<span>
									Responsive navigation with desktop and mobile layouts
								</span>
							</div>

							<div class="highlight">
								<span>✦ </span>
								<span>
									Clean separation of concerns between layout and content
								</span>
							</div>

							<div class="highlight">
								<span>✦ </span>
								<span>Semantic HTML and accessible content structure</span>
							</div>

							<div class="highlight">
								<span>✦ </span>
								<span>Deployed using GitHub Pages</span>
							</div>
						</div>
					</div>
					<div class="project-item">
						<p class="project-title">To-do</p>
						<img src={todo} alt="to-do" />
						<span class="link">
							<a href="https://camilofi-dev.github.io/to-do/">
								camilofi-dev.github.io/to-do/
							</a>
						</span>

						<div class="labels">
							<span class="label">JavaScript</span>
							<span class="label">CSS</span>
							<span class="label">HTML</span>
						</div>
						<div class="projects-item-desc">
							<div class="highlight">
								<span>✦ </span>
								<span>Full CRUD task management in Vanilla JavaScript</span>
							</div>

							<div class="highlight">
								<span>✦ </span>
								<span>Dynamic DOM manipulation without frameworks</span>
							</div>

							<div class="highlight">
								<span>✦ </span>
								<span>Auto-resizing textareas for better UX</span>
							</div>

							<div class="highlight">
								<span>✦ </span>
								<span>Modal-based task editing</span>
							</div>

							<div class="highlight">
								<span>✦ </span>
								<span>Unique task identification using data attributes</span>
							</div>

							<div class="highlight">
								<span>✦ </span>
								<span>Timestamp-based ID generation</span>
							</div>

							<div class="highlight">
								<span>✦ </span>
								<span>Event handling for dynamic elements</span>
							</div>

							<div class="highlight">
								<span>✦ </span>
								<span>Conditional rendering and DOM cleanup</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
