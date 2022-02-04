import { Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";


export default function Page2(props) {
	// const { handleSubmit } = useForm();
	const [todos, setTodos] = useState("");

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [priority, setPriority] = useState("");

	// const handelInputChange = (e) => {
	// 	const { name, value } = e.target;
	// 	if(name === title){
	// 		setTitle(value);
	// 		document.write("title",  title);
	// 	}
	// 	console.log(name, value);
	// };


	const onSubmit = (data, e) => {
		// e.preventDefault();
		// console.log("data", data);
		// console.log(data);

		const data1 = {
			title: title,
			description: description,
			priority: priority,
		};
		setTodos(data1.stringify);
		console.log(todos);
		// setTitle(title);
		// console.log("Data", data1);
	};


	const location = useLocation();
	location.state = title;

	{todos} = location.state;
	// console.log(title);

	return (
		<>
			<Paper
				style={{ margin: "10px auto", textAlign: "center" }}
				elevation={24}
			>
				<h1 style={{ textAlign: "center" }}>Todo Application</h1>
				<form autoComplete="off" onSubmit={onSubmit}>
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
								onChange={(e) => {
									setTitle(e.target.value);
								}}
								required
							/>

							<TextField
								name="desc"
								label="Description"
								variant="standard"
								onChange={(e) => {
									setDescription(e.target.value);
								}}
								required
							/>

							<TextField
								name="priority"
								type="number"
								label="Priority"
								variant="standard"
								onChange={(e) => {
									setPriority(e.target.value);
								}}
								required
							/>
						</Grid>
					</Grid>
					<Link to={"/"} state={{title1 : title}} style={{ textDecoration: "none" }}>
						<Button
							type="submit"
							style={{ margin: "10px" }}
							variant="contained"
						>
							Save
						</Button>
					</Link>
				</form>
			</Paper>
		</>
	);
}
