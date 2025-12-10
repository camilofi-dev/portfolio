import react from "../images/react.png";
import node from "../images/node.png";
import github from "../images/github.png";
import git from "../images/git.png";
import js from "../images/js.png";
import css from "../images/css.png";
import html from "../images/html.png";
import mysql from "../images/mysql.png";

export default function Technologies() {
	return (
		<>
			<section id="technologies">
				<h3>Technologies</h3>
				<div class="technologies-container">
					<div class="technologies-item">
						<img class="item-img" src={react} alt="" />
						React.js
					</div>
					<div class="technologies-item">
						<img class="item-img" src={node} alt="" />
						Node.js
					</div>
					<div class="technologies-item">
						<img class="item-img" src={github} alt="" />
						GitHub
					</div>
					<div class="technologies-item">
						<img class="item-img" src={git} alt="" />
						Git
					</div>
					<div class="technologies-item">
						<img class="item-img" src={js} alt="" />
						JS
					</div>
					<div class="technologies-item">
						<img class="item-img" src={css} alt="" />
						CSS
					</div>
					<div class="technologies-item">
						<img class="item-img" src={html} alt="" />
						HTML
					</div>
					<div class="technologies-item">
						<img class="item-img" src={mysql} alt="" />
						MySQL
					</div>
				</div>
			</section>
		</>
	);
}
