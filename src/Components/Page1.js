import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import "../index.css";
import { Link, useLocation } from "react-router-dom";
// import Page2 from "./Page2";

export default function Page1(props) {
	const location = useLocation();
	const { title1, desc, priority1 } = location.state;

	// const {title, desc, priority} = props;
	// console.log(props);
	return (
		<>
			<Paper
				style={{ margin: "10px auto", textAlign: "center" }}
				elevation={24}
			>
				<div className="todoApp">
					<h1>Todo Application</h1>
					<ul className="list">
						<li>
							{title1}
						</li>
					</ul>
					<Link to={"/Page2"} style={{ textDecoration: "none" }}>
						<Button variant="contained">Add</Button>
					</Link>
				</div>
			</Paper>
		</>
	);
}
