import { TextField } from "@mui/material";
import React from "react";

export default function Input(props) {
    const {name, label, onChange, value} = props
	return (
		<>
			<TextField
            name={name}
            label={label}
            value={value}
            variant="outlined"
            onChange={onChange}
            />
		</>
	);
}
