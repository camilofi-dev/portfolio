import todo from "../images/to-do.png";
import portfolio from "../images/portfolio.png";

export default function Projects() {
	return (
		<>
			<section id="projects">
				<span class="section-title">Projects</span>
				<div class="project-list">
					<div class="project-item">
						<img src={portfolio} alt="to-do" width="40px" />
						<div class="labels">
							<span class="label">React</span>
							<span class="label">JavaScript</span>
							<span class="label">CSS</span>
							<span class="label">HTML</span>
						</div>
						<div class="projects-item-desc">
							<p>Portfolio</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consequatur harum dicta error ad voluptas beatae fugiat corrupti
								totam officia temporibus fugit quo cumque perspiciatis, quaerat
								atque sit tenetur maiores doloribus.
							</p>
						</div>
					</div>
					<div class="project-item">
						<img src={todo} alt="to-do" width="40px" />
						<div class="labels">
							<span class="label">JavaScript</span>
							<span class="label">CSS</span>
							<span class="label">HTML</span>
						</div>
						<div class="projects-item-desc">
							<p>To-do</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consequatur harum dicta error ad voluptas beatae fugiat corrupti
								totam officia temporibus fugit quo cumque perspiciatis, quaerat
								atque sit tenetur maiores doloribus.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
