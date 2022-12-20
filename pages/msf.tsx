import {InputLabel, Select, MenuItem, FormControl} from "@mui/material";
import React from "react";

export default function MultiSelectField(props) {
	let querycopy = props.query; //stops trying to assign values to props.query
	return (//idea behind taking "query" from options is to lift state up
	<FormControl variant="filled">
		<InputLabel id={`${props.name}-label`}>{props.name[0].toUpperCase() + props.name.slice(1,props.name.length).toLowerCase()}</InputLabel>
		<Select
			labelId={`${props.name}-label`}
			className="field"
			value={props.query[props.name]}
			multiple
			onChange={(event) => {
				props.setQuery(Object.assign(querycopy,{[props.name]:event.target.value})); //basically just used for object composition - Object.assign returns the composed object
				props.sendQuery(Object.assign(querycopy,{[props.name]:event.target.value}));
			}}
		>
			 {props.options.map((el) => (
				<MenuItem value={el} key={el}>{el}</MenuItem>
			))}
		</Select>
	</FormControl>
	);
}
