import react, { useState } from "react";
import AddItems from "./components/AddItems";
import Lists from "./components/Lists";

const App = () => {
	const [todos, setTodos] = useState(["code to kill", "never settle"]);

	return (
		<main className="container">
			<AddItems onSubmit={setTodos} />
			<Lists todos={todos} setTodos={setTodos} />
		</main>
	);
};

export default App;
