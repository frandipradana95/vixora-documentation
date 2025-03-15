import { useState, useFlow } from "vixora";
import logo from "../logo1.png";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	useFlow(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
			<div className="container">
				<div className="logo">
					<img src={logo} alt="logo" />
					<h1>Vixora</h1>
				</div>
				<ul className="nav-links">
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#documentation">Documentation</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
