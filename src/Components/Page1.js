import { Button, Paper } from "@mui/material";
import React from "react";
import "../index.css";
import { Link, useLocation } from "react-router-dom";
// import Page2 from "./Page2";

export default function Page1(props) {
	const location = useLocation();
	const { tododata } = location.state;
	console.log(tododata);
	return (
		<>
			<Paper
				style={{ margin: "10px auto", textAlign: "center" }}
				elevation={24}
			>
				<div className="todoApp">
					<h1>Todo Application</h1>
					<ul className="list">
						<li>{tododata}</li>
					</ul>
					<Link to={"/Page2"} style={{ textDecoration: "none" }}>
						<Button variant="contained">Add</Button>
					</Link>
				</div>
			</Paper>
		</>
	);
}
