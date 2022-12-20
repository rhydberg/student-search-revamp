import React from "react";
import Card from "@mui/material/Card";
import Image from "./UserImage.tsx";
//import "styles/SCard.css";


//props: data: object with student data

function SCard(props) {
	return(
	props.compact
		?(<Card 
			className="student-card-compact"
			style={{
				cursor:(props.pointer ? "pointer" : "auto"),
				display:"flex",
				justifyContent:"space-evenly"
			}}
			onClick={props.onClick}
		>
			<Image style={{width:150, height:150}} u={props.data.u} i={props.data.i} g={props.data.g} />
			<div>
				<p>{props.data.n}</p>
				<p>{props.data.i}</p>
				<p>{props.data.d}</p>
			</div>	
		</Card>)
		:(<Card 
			className="student-card"
			style={{
				cursor:(props.pointer ? "pointer" : "auto"),
				display:"flex",
				flexDirection:"column",
				justifyContent:"space-evenly",
				alignItems:"center"
			}}
			onClick={props.onClick}
		>
			<Image style={{width:200, height:200}} u={props.data.u} i={props.data.i} g={props.data.g} />
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
