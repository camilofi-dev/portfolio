import ecci from "../images/ecci.png";
import sena from "../images/sena.png";
import fcc from "../images/fcc.png";

export default function Education() {
	return (
		<>
			<section id="education">
				<h3>Education</h3>
				<div class="edu-container">
					<div class="higher-studies-container">
						<span>Higher Studies</span>
						<div class="edu-item">
							<img class="edu-img" src={ecci} alt="ecci.jpg" />
							<div class="edu-description">
								<span class="degree">Systems Engineering</span>
								<span class="institute">ECCI University</span>
								<span class="status">
									Currently in 9<sup>th</sup> semester
								</span>
							</div>
						</div>
						<div class="edu-item">
							<img class="edu-img" src={sena} alt="sena.png" />
							<div class="edu-description">
								<span class="degree">Software Development Technologist</span>
								<span class="institute">SENA</span>
								<span class="status">Certified (2y)</span>
								<span>
									As a graduation project, our team developed a billing and
									inventory management system for a real store. The software
									included modules for products, customers, sales, and
									reporting. I participated in the analysis, frontend
									development, testing, and final delivery of the product to the
									client.
								</span>
							</div>
						</div>
						<div class="edu-item">
							<img class="edu-img" src={sena} alt="sena.png" />
							<div class="edu-description">
								<span class="degree">Systems Technician</span>
								<span class="institute">SENA</span>
								<span class="status">Certified (1y)</span>
								<span>
									As a graduation project, our team implemented a network with
									real Internet access. We designed, wired, and configured a
									local area network (LAN) in a controlled environment. We set
									up switches, routers, and servers to build a fully functional
									network from scratch. I contributed to both the physical and
									logical setup, as well as the documentation of the entire
									process.
								</span>
							</div>
						</div>
					</div>
					<div class="certifications-container">
						<span>Certifications</span>
						<div class="edu-item">
							<img class="edu-img" src={fcc} alt="fcc.jpg" />
							<div class="edu-description">
								<span class="degree">JS Algorithms & Data Structures</span>
								<span class="institute">freeCodeCamp</span>
								<span class="status">Certified (300h)</span>
							</div>
						</div>
						<div class="edu-item">
							<img class="edu-img" src={fcc} alt="fcc.png" />
							<div class="edu-description">
								<span class="degree">Responsive Web Design</span>
								<span class="institute">freeCodeCamp</span>
								<span class="status">Certified (300h)</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
