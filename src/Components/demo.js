// import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";
// import { Paper, TextField } from "@mui/material";
// import { Button } from "@mui/material";
// import { useForm, Controller } from "react-hook-form";


// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		display: "flex",
// 		flexDirection: "column",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		padding: "10px",

// 		"& .MuiTextField-root": {
// 			margin: "10px",
// 			width: "300px",
// 		},
// 		"& .MuiButtonBase-root": {
// 			margin: "10px",
// 		},
// 	},
// }));

// const Page2 = ({ handleClose }) => {
// 	const [data, setData] = useState("");

// 	const classes = useStyles();
// 	const { handleSubmit, control, reset } = useForm();

// 	const onSubmit = (data) => {
// 		setData(data);
// 		console.log("data",data);
// 	};

// 	// const location = useLocation();
// 	// location.state = data;
// 	// const { from } = location.state;


// 	return (
// 		<Paper style={{ margin: "10px auto", textAlign: "center" }} elevation={24}>
// 			<h1 style={{ textAlign: "center" }}>Todo Application</h1>
// 			<form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
// 				<Controller
// 					name="Title"
// 					control={control}
// 					defaultValue=""
// 					render={({ field: { onChange, value }, fieldState: { error } }) => (
// 						<TextField
// 							label="Title"
// 							variant="outlined"
// 							value={value}
// 							onChange={onChange}
// 							error={!!error}
// 							helperText={error ? error.message : null}
// 						/>
// 					)}
// 					rules={{ required: "Title required" }}
// 				/>
// 				<Controller
// 					name="description"
// 					control={control}
// 					defaultValue=""
// 					render={({ field: { onChange, value }, fieldState: { error } }) => (
// 						<TextField
// 							label="Description"
// 							variant="outlined"
// 							value={value}
// 							onChange={onChange}
// 							error={!!error}
// 							helperText={error ? error.message : null}
// 						/>
// 					)}
// 					rules={{ required: "Description required" }}
// 				/>
// 				<Controller
// 					name="priority"
// 					control={control}
// 					defaultValue=""
// 					render={({ field: { onChange, value }, fieldState: { error } }) => (
// 						<TextField
// 							label="Priority"
// 							variant="outlined"
// 							value={value}
// 							onChange={onChange}
// 							error={!!error}
// 							helperText={error ? error.message : null}
// 							type="number"
// 						/>
// 					)}
// 					rules={{ required: "Password required" }}
// 				/>
// 				<div>
// 					<Button variant="contained" onClick={() => { reset({  })}}>
// 						Reset
// 					</Button>
// 					<Button type="submit" variant="contained" color="primary" >
// 						Add Item
// 					</Button>
// 				</div>
// 			</form>
// 		</Paper>
// 	);
// };

// export default Page2;
