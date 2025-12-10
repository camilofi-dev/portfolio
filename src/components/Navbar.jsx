export default function Navbar() {
	return (
		<>
			<nav id="nav">
				<a class="nav-btn" href="#about">
					About
				</a>
				<a class="nav-btn" href="#technologies">
					Technologies
				</a>
				<a class="nav-btn" href="#experience">
					Experience
				</a>
				<a class="nav-btn" href="#projects">
					Projects
				</a>
				<a class="nav-btn" href="#education">
					Education
				</a>
			</nav>
			<div id="responsive-nav">
				<div class="toggle">☰</div>
				<a class="responsive-nav-btn" href="#about">
					About
				</a>
				<a class="responsive-nav-btn" href="#technologies">
					Technologies
				</a>
				<a class="responsive-nav-btn" href="#experience">
					Experience
				</a>
				<a class="responsive-nav-btn" href="#projects">
					Projects
				</a>
				<a class="responsive-nav-btn" href="#education">
					Education
				</a>
			</div>
		</>
	);
}
