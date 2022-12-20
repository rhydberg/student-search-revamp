import React, {useState} from "react";
import {InputLabel, TextField, Select, MenuItem, Paper, FormControl} from "@mui/material"
import MultiSelectField from "./msf.tsx";
import {data as listOpts} from "./parseData.tsx";


/* options to include:
Year
Gender - simple option menu
Hall
Programme
Dept.
Blood grp.
Hometown - text
Name/username/rollno. - text
Non-text are checkbox option menus
*/

/*MUI:
checkbox option menus: checkmark select
simple option menus: select
rest: text field
*/

function Options(props) {
	const [query, setQuery] = useState({
		gender:"",
		name:"",
		batch:[],
		hall:[],
		prog:[],
		dept:[],
		bloodgrp:[],
		address:""
	});
	
	return (
		<Paper className="options">
		
			<MultiSelectField 
				query={query}
				name="batch"
				options={listOpts.batch}
				setQuery={setQuery}
				sendQuery={props.sendQuery}
			/>

			<FormControl variant="filled">
				<InputLabel id="gender-label">Gender</InputLabel>
				<Select
					className="field"
					labelId="gender-label"
					value={query.gender}
					onChange={(event) => {
						setQuery(Object.assign(query,{gender:event.target.value}));
						props.sendQuery(Object.assign(query,{gender:event.target.value}));
					}}
				>
					<MenuItem value="">Any</MenuItem>
					<MenuItem value="F">Female</MenuItem>
					<MenuItem value="M">Male</MenuItem>
				</Select>
			</FormControl>

			<MultiSelectField 
				query={query}
				name="hall"
				options={listOpts.hall}
				setQuery={setQuery}
				sendQuery={props.sendQuery}
			/>
			
			<MultiSelectField 
				query={query}
				name="prog"
				options={listOpts.prog}
				setQuery={setQuery}
				sendQuery={props.sendQuery}
			/>
			
			<MultiSelectField 
				query={query}
				name="dept"
				options={listOpts.dept}
				setQuery={setQuery}
				sendQuery={props.sendQuery}
			/>
			
			<MultiSelectField 
				query={query}
				name="bloodgrp"
				options={listOpts.bloodgrp}
				setQuery={setQuery}
				sendQuery={props.sendQuery}
			/>
			
			<FormControl variant="filled">
				<TextField
					className="field home"
					label="Hometown"
					value={query.address}
					onChange={(event) => {
						setQuery(Object.assign(query,{address:event.target.value}));
						props.sendQuery(Object.assign(query,{address:event.target.value}));
					}}
				/>
			</FormControl>
			
			<FormControl variant="filled">
				<TextField
					className="field main-text"
					label="Enter name, username or roll no."
					value={query.name}
					onChange={(event) => {
						setQuery(Object.assign(query,{name:event.target.value}));
						props.sendQuery(Object.assign(query,{name:event.target.value}));
					}}
				/>
			</FormControl>
		</Paper>);
}

export default Options;
