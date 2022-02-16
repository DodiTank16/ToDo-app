import { Button, IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useEffect, useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

export default function ViewTask() {
	const navigate = useNavigate();
	const [todos, setTodos] = useState([]);
	// const [data, setData] = useState(JSON.parse(localStorage.getItem("list")));
	const [deletedData, setDeletedData] = useState(null);
	const [disable, setDisable] = React.useState(true);

	useEffect(() => {
		if (localStorage.getItem("list") == null) {
			localStorage.setItem("list", JSON.stringify([]));
		}
		const todo = JSON.parse(localStorage.getItem("list"));
		setTodos(todo);
	}, []);

	useEffect(() => {
		setDeletedData(JSON.parse(localStorage.getItem("deletedItem")));
	}, [localStorage.getItem("deletedItem")]);

	const HandleDelete = (id) => {
		const removeItem = todos.filter((value) => {
			return value.id !== id;
		});
		const deleted = todos.filter((value) => {
			return value.id === id;
		});

		localStorage.setItem("list", JSON.stringify(removeItem));
		localStorage.setItem("deletedItem", JSON.stringify(deleted));
		// console.log(deleted);
		setDisable(false);
		setTodos(removeItem);
	};

	const HandleDeleteItem = () => {
		// console.log(deletedData);

		let finalTodo = [...todos, ...deletedData];
		// if (localStorage.getItem("deletedItem") === null)
		setTodos(finalTodo)
		localStorage.setItem("list", JSON.stringify(finalTodo));
		console.log(finalTodo);
		localStorage.removeItem("deletedItem");
		setDisable(true);


		// window.location.reload(false);
	};

	// console.log(todos);

	function gotoPage2() {
		navigate("/AddTask");
	}

	return (
		<>
			<Paper
				style={{ margin: "10px auto", textAlign: "center" }}
				elevation={24}
			>
				<div className="todoApp">
					<h1>
						<u>Todo Application</u>
					</h1>
					<table id="tableid">
						<thead>
							<tr>
								<th>Title</th>
								<th>Description</th>
								<th>Priority</th>
								<th>Options</th>
							</tr>
						</thead>
						<tbody>
							{todos.map((value, key) => {
								return (
									<tr key={key}>
										<td>{value.title}</td>
										<td>{value.description}</td>
										<td>{value.priority}</td>
										<td>
											<IconButton
												style={{ color: "#0083d3" }}
												aria-label="edit"
												onClick={() => {
													navigate(`/AddTask/${value.id}`, { state: value });
												}}
											>
												<EditIcon />
											</IconButton>
											<IconButton
												style={{ color: "red" }}
												aria-label="delete"
												onClick={() => {
													HandleDelete(value.id);
												}}
											>
												<DeleteIcon />
											</IconButton>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
					<Button
						style={{ margin: "20px" }}
						variant="contained"
						onClick={() => {
							gotoPage2();
						}}
					>
						Add
					</Button>
					<Button
						style={{ margin: "20px" }}
						variant="contained"
						onClick={() => {
							HandleDeleteItem();
						}}
						disabled={disable}
					>
						Undo
					</Button>
				</div>
			</Paper>
		</>
	);
}
