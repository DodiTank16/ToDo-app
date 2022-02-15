import { Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";

const intialValues = {
	title: "",
	description: "",
	priority: "",
};
export default function AddTask() {
	const location = useLocation();
	const navigate = useNavigate();
	const { id } = useParams();
	const path = location.pathname;
	const isAdd = path === "/AddTask";
	console.log(path);
	const [state, setState] = useState(intialValues);
	const [data, setData] = useState(JSON.parse(localStorage.getItem("list")));

	const SaveData = () => {
		isAdd ? uploadData() : editTask();
	};

	const uploadData = () => {
		let localData = JSON.parse(localStorage.getItem("list"));

		localData.push({
			id: nanoid(),
			title: state.title,
			description: state.description,
			priority: state.priority,
		});
		localStorage.setItem("list", JSON.stringify(localData));
		navigate("/");
	};

	// console.log(location.state.title)
	useEffect(() => {
		if (path === `/AddTask/${id}`) {
			setState(location.state);
		}
	}, [location]);

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const editTask = () => {
		const updatedTask = data.map((task) => {
			if (task.id === id) {
				return {
					...task,
					title: state.title,
					description: state.description,
					priority: state.priority,
				};
			}

			return task;
		});

		setData(updatedTask);
		localStorage.setItem("list", JSON.stringify(updatedTask));
		navigate("/");
	};

	return (
		<>
			<Paper
				style={{ margin: "10px auto", textAlign: "center" }}
				elevation={24}
			>
				<h1>
					<u>Todo Application</u>
				</h1>
				<form autoComplete="off" onSubmit={SaveData}>
					<Grid
						style={{ margin: "10px" }}
						container
						spacing={1}
						direction="column"
					>
						<Grid item xs={6}>
							<TextField
								name="title"
								label="Title"
								variant="standard"
								value={state.title}
								onChange={handleChange}
								required
							/>
						</Grid>

						<Grid item xs={6}>
							<TextField
								name="description"
								label="Description"
								variant="standard"
								value={state.description}
								onChange={handleChange}
								required
							/>
						</Grid>

						<Grid item xs={6}>
							<TextField
								name="priority"
								type="number"
								label="Priority"
								variant="standard"
								value={state.priority}
								onChange={handleChange}
								required
							/>
						</Grid>
					</Grid>
					<Button type="submit" style={{ margin: "10px" }} variant="contained">
					{
						isAdd ? "Save" : "Edit"
					}
					</Button>
				</form>
			</Paper>
		</>
	);
}
