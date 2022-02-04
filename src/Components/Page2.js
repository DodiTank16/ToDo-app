import { Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";

export default function Page2(props) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [priority, setPriority] = useState("");

	// const onSubmit = (data, e) => {
	// 	// e.preventDefault();
	// 	// console.log("data", data);
	// 	// console.log(data);

	// 	const data1 = {
	// 		title: title,
	// 		description: description,
	// 		priority: priority,
	// 	};
	// 	// console.log("Data", data1);

	// 	let item = JSON.stringify(data1);
	// 	console.log(item);
	// 	SendData(item);
	// 	// return JSON.stringify(data1);
	// };

	function SendData() {
		const data1 = {
			title: title,
			description: description,
			priority: priority,
		};
		// console.log("Data", data1);

		let item = JSON.stringify(data1);
		// console.log(item);

		const location = useLocation();
		location.state = item;
		const tododata = location.state;
		console.log(tododata);
	}

	// console.log(title);

	return (
		<>
			<Paper
				style={{ margin: "10px auto", textAlign: "center" }}
				elevation={24}
			>
				<h1 style={{ textAlign: "center" }}>Todo Application</h1>
				<form autoComplete="off" onSubmit={SendData()}>
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
					<Link
						to={"/"}
						state={{ title1: title }}
						style={{ textDecoration: "none" }}
					>
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
