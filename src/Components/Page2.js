import { Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Page2() {
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [priority, setPriority] = useState("");

	const Save = () => {
		let localData = JSON.parse(localStorage.getItem("list"));
		localData.push({
			title: title,
			description: description,
			priority: priority,
		});
		console.log("localData", localData);
		localStorage.setItem("list", JSON.stringify(localData));
		navigate("/");
	};

	return (
		<>
			<Paper
				style={{ margin: "10px auto", textAlign: "center" }}
				elevation={24}
			>
				<h1>
					<i>
						<u>Todo Application</u>
					</i>
				</h1>
				<form
					autoComplete="off"
					onSubmit={() => {
						Save();
					}}
				>
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
						</Grid>

						<Grid item xs={6}>
							<TextField
								name="desc"
								label="Description"
								variant="standard"
								onChange={(e) => {
									setDescription(e.target.value);
								}}
								required
							/>
						</Grid>

						<Grid item xs={6}>
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
					{/* <Link to={"/"} style={{ textDecoration: "none" }}> */}
					<Button
						type="submit"
						style={{ margin: "10px" }}
						variant="contained"
						// 	onClick={() => {
						// 		Save();
						// 	}}
					>
						Save
					</Button>
					{/* </Link> */}
				</form>
			</Paper>
		</>
	);
}
