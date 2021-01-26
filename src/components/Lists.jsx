import react, { useState } from "react";

const Lists = ({ todos, setTodos }) => {
	const [flag, setFlag] = useState(false);
	const [listIndex, setListIndex] = useState(0);

	const onClickHandler = (index) => {
		const arr = todos;
		arr.splice(index, 1);
		setTodos((arr) => [...arr]);
	};

	const onActive = (index) => {
		setFlag(true);
		setListIndex(index);

		setTimeout(() => {
			setFlag(false);
		}, 100);
	};

	const toBeRendered = todos.map((todo, index) => {
		return (
			<li
				key={index}
				className={`list-group-item rounded ${
					flag && index === listIndex ? "active" : ""
				} `}
				onClick={() => onActive(index)}
			>
				<div className="row">
					<div className="col-8">
						<input
							className="form-check-input me-1"
							type="checkbox"
							value=""
							aria-label="..."
						></input>
						{todo}
					</div>
					<div className="col-4 d-flex justify-content-end">
						<button
							className="btn btn-danger rounded"
							onClick={() => onClickHandler(index)}
						>
							X
						</button>
					</div>
				</div>
			</li>
		);
	});
	return <ul className="list-group mt-5">{toBeRendered}</ul>;
};

export default Lists;
