import { Button, IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useEffect, useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

export default function Page1() {
	// const location = useLocation();
	const navigate = useNavigate();
	const [todos, setTodos] = useState([]);

	function gotoPage2() {
		navigate("/Page2");
	}

	useEffect(() => {
		if (localStorage.getItem("list") == null) {
			localStorage.setItem("list", JSON.stringify([]));
		}
		const todo = JSON.parse(localStorage.getItem("list"));
		setTodos(todo);
	}, []);

	console.log(todos);
	return (
		<>
			<Paper
				style={{ margin: "10px auto", textAlign: "center" }}
				elevation={24}
			>
				<div className="todoApp">
					<h1>
						<i>
							<u>Todo Application</u>
						</i>
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
											<IconButton aria-label="edit">
												<EditIcon />
											</IconButton>
											<IconButton aria-label="delete">
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
				</div>
			</Paper>
		</>
	);
}
