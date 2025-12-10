import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

export default function About() {
	return (
		<>
			<section id="about">
				<span class="name">Camilo Figueroa</span>
				<span class="job">Software Developer</span>
				<span class="email">cgfigueroa29@gmail.com</span>
				<div class="contact">
					<a
						href="https://www.linkedin.com/in/camilo-figueroa/"
						target="_blank"
					>
						<img class="contact-icon" src={linkedin} alt="linkedin.jpg" />
					</a>
					<a href="https://github.com/cgfigueroa29" target="_blank">
						<img class="contact-icon" src={github} alt="github.png" />
					</a>
				</div>
				<p>
					Software Analyst and Developer with over a year of experience in
					creating technical documentation and developing functional,
					user-friendly web interfaces. I have a solid understanding of computer
					science fundamentals, which allows me to approach projects with a
					broad and technical perspective. I’m detail-oriented, innovative, and
					a strong team player. I aim to contribute with efficient, up-to-date
					solutions while continuing to grow professionally in a dynamic
					environment.
				</p>
			</section>
		</>
	);
}
