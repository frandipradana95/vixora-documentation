import { useState } from "vixora";
import "./style.css";

/**
 * Every time you use JSX syntax
 * you have to call the createElement function, that's mandatory!
 *
 * This framework is inspired by React.
 *
 */

const App = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="app">
			<h1>Welcome to vixora small framework</h1>
			<h3>This framework is inspired by React.</h3>
			<p>Conunt = {count}</p>
			<button onClick={() => setCount(count + 1)}>Increnment</button>
		</div>
	);
};

export default App;
