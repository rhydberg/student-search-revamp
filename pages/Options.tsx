import React, {useState, useCallback} from "react";
import {InputLabel, TextField, Select, MenuItem, Paper, FormControl, InputAdornment, IconButton} from "@mui/material"
import {ClearRounded} from "@mui/icons-material"
import MultiSelectField from "./msf.tsx";
import {data as listOpts} from "./parseData.tsx";
import debounce from "./debounce.tsx"


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
	
	const [test, settest] = useState({name:"", foo:"lol"});
	
	const newsendQuery = useCallback(debounce(props.sendQuery, 300),[]);
	
	return (
		<Paper className="options">
			<div className="row">
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
							setQuery({...query, gender:event.target.value});
							props.sendQuery({...query, gender:event.target.value});
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
			</div>
			<div className="row">
				<MultiSelectField 
					query={query}
					name="prog"
					label="Programme"
					options={listOpts.prog}
					setQuery={setQuery}
					sendQuery={props.sendQuery}
				/>
			
				<MultiSelectField 
					query={query}
					name="dept"
					label="Department"
					options={listOpts.dept}
					setQuery={setQuery}
					sendQuery={props.sendQuery}
				/>
			
				<MultiSelectField 
					query={query}
					name="bloodgrp"
					label="Blood group"
					options={listOpts.bloodgrp}
					setQuery={setQuery}
					sendQuery={props.sendQuery}
				/>
			</div>
			
			<div className="row">
				<FormControl variant="filled">
					<TextField
						className="field home"
						label="Hometown"
						value={query.address}
						onChange={(event) => {
							setQuery({...query, address:event.target.value});
							newsendQuery(Object.assign(query,{address:event.target.value}));
						}}
					/>
				</FormControl>
			</div>
			<FormControl variant="filled" className="row">
				<TextField
					className="field main-text"
					label="Enter name, username or roll no."
					value={query.name}
					InputProps={{
						endAdornment:(<InputAdornment position="end">
							<IconButton 
								disabled={query.name.length === 0}
								onClick={() => {
									setQuery({...query, name:""});
									newsendQuery({...query, name:""});
								}}
							>
								<ClearRounded />
							</IconButton>
						</InputAdornment>),
					}}
					onChange={(event) => {
						setQuery({...query, name:event.target.value});
						newsendQuery({...query, name:event.target.value});
					}}
				/>
			</FormControl>
		</Paper>);
}

export default Options;
