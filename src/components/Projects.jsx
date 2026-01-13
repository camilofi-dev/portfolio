import todo from "../images/to-do.png";

export default function Projects() {
	return (
		<>
			<section id="projects">
				<span class="section-title">Projects</span>
				<div class="project-list">
					<div class="project-item">
						<img src={todo} alt="to-do" width="40px" />
						<div class="projects-item-desc">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
							nihil at molestiae laudantium amet reiciendis id sit blanditiis,
							velit ratione obcaecati? Laboriosam ex perspiciatis aut veritatis,
							saepe reprehenderit natus. Cum.
						</div>
					</div>
					<div class="project-item">
						<img src={todo} alt="to-do" width="40px" />
						<div class="projects-item-desc">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
							nihil at molestiae laudantium amet reiciendis id sit blanditiis,
							velit ratione obcaecati? Laboriosam ex perspiciatis aut veritatis,
							saepe reprehenderit natus. Cum.
						</div>
					</div>
					<div class="project-item">
						<img src={todo} alt="to-do" width="40px" />
						<div class="projects-item-desc">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
							nihil at molestiae laudantium amet reiciendis id sit blanditiis,
							velit ratione obcaecati? Laboriosam ex perspiciatis aut veritatis,
							saepe reprehenderit natus. Cum.
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
