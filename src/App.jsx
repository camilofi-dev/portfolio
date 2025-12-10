import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
	return (
		<>
			<Navbar />
			<div class="content">
				<About />
				<Technologies />
				<Experience />
				<Projects />
				<Education />
			</div>
		</>
	);
}

export default App;
