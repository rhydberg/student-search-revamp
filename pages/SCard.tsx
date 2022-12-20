import React from "react";
import Card from "@mui/material/Card";
//import "styles/SCard.css";


//props: data: object with student data

function SCard(props) {
	return(
	props.compact
		?(<Card 
			className="student-card-compact"
			style={ props.pointer 
				? {cursor:"pointer"}
				: {}}
			onClick={props.onClick}
		>
			<p>{props.data.n}</p>
			<p>{props.data.i}</p>
			<p>{props.data.g === "M" ? "Male" : "Female"}</p>
			<p>Dept.:{props.data.d}</p>
			<p>Baapu roll number: {props.data.s}</p>
			{props.children}
		</Card>)
		:(<Card 
			className="student-card"
			style={ props.pointer 
				? {cursor:"pointer"}
				: {}}
			onClick={props.onClick}
		>
			<p>{props.data.n}</p>
			<p>{props.data.i}</p>
			<p>{props.data.g === "M" ? "Male" : "Female"}</p>
			<p>Dept.:{props.data.d}</p>
			<p>Baapu roll number: {props.data.s}</p>
			{props.children}
		</Card>)
	);
}

export default SCard;
