import react, { useState } from "react";

const AddItems = ({ onSubmit }) => {
	const [term, setTerm] = useState("");

	const onClickHandler = () => {
		onSubmit((arr) => [...arr, term]);
		setTerm("");
	};

	return (
		<div className="d-flex my-3 justify-content-center">
			<input
				value={term}
				onChange={(e) => setTerm(e.target.value)}
				type="text"
				className="w-75 mx-3 px-3 rounded-pill shadow bg-light"
				placeholder="So, what you wanna do today ?"
			/>
			<button
				onClick={onClickHandler}
				className="rounded-circle btn btn-primary"
			>
				+
			</button>
		</div>
	);
};

export default AddItems;
