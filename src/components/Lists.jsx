import react from "react";

const Lists = ({ todos, setTodos }) => {
	const onClickHandler = (index) => {
		const arr = todos;
		arr.splice(index, 1);
		setTodos(arr);
	};

	const toBeRendered = todos.map((todo, index) => {
		return (
			<li className="list-group-item">
				<div className="row">
					<div className="col-8">{todo}</div>
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
	return <ul className="list-group">{toBeRendered}</ul>;
};

export default Lists;
