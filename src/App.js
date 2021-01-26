import react, { useState } from "react";
import AddItems from "./components/AddItems";
import Lists from "./components/Lists";
import "./style.css";
import logo from "./letstodo.svg";

const App = () => {
	const [todos, setTodos] = useState(["code to achieve", "never settle"]);

	return (
		<main className="container ">
			<div className="container d-flex justify-content-center ">
				<img className="w-50 h-50" src={logo} alt="lets to do" />
			</div>

			<AddItems onSubmit={setTodos} />
			<Lists todos={todos} setTodos={setTodos} />
		</main>
	);
};

export default App;
