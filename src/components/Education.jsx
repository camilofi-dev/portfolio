import ecci from "../images/ecci.png";
import sena from "../images/sena.png";
import fcc from "../images/fcc.png";

export default function Education() {
	return (
		<>
			<section id="education">
				<span class="section-title">Education</span>
				<div class="edu-container">
					<div class="edu-item">
						<span class="institute">ECCI University</span>
						<img class="edu-img" src={ecci} alt="ecci.jpg" />
						<div class="edu-description">
							<span class="degree">Systems Engineering</span>
							<span class="status">
								Currently in 9<sup>th</sup> semester
							</span>
						</div>
					</div>
					<div class="edu-item">
						<span class="institute">SENA</span>
						<img class="edu-img" src={sena} alt="sena.png" />
						<div class="edu-description">
							<span class="degree">Software Development Technologist</span>
							<span class="status">Certified (2y)</span>
						</div>
					</div>
					<div class="edu-item">
						<span class="institute">SENA</span>
						<img class="edu-img" src={sena} alt="sena.png" />
						<div class="edu-description">
							<span class="degree">Systems Technician</span>
							<span class="status">Certified (1y)</span>
						</div>
					</div>
					<div class="edu-item">
						<span class="institute">freeCodeCamp</span>
						<img class="edu-img" src={fcc} alt="fcc.jpg" />
						<div class="edu-description">
							<span class="degree">JS Algorithms & Data Structures</span>
							<span class="status">Certified (300h)</span>
						</div>
					</div>
					<div class="edu-item">
						<span class="institute">freeCodeCamp</span>
						<img class="edu-img" src={fcc} alt="fcc.png" />
						<div class="edu-description">
							<span class="degree">Responsive Web Design</span>
							<span class="status">Certified (300h)</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
