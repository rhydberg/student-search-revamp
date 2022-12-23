import React from "react";
import Card from "@mui/material/Card";
import Image from "./UserImage.tsx";
import {EmailRounded, InvertColorsRounded, HomeRounded, AccountBalanceRounded} from "@mui/icons-material";
//import "styles/SCard.css";


//props: data: object with student data

function SCard(props) {
	switch (props.compact) {
		case 'ultra':
			return (
				<Card
					className="student-card-ultra-compact"
					style={{
						cursor:(props.pointer ? "pointer" : "auto"),
					}}
					onClick={(event) => {
						if (props.onClick !== undefined) props.onClick(event);
					}}
				>
					<Image style={{width:100, height:100}} u={props.data.u} i={props.data.i} g={props.data.g} />
					<div>
						<p>{props.data.n}</p>
						<p>{props.data.i}</p>
					</div>
				</Card>
			);
		case true:
			return (
				<Card
					className="student-card-compact"
					style={{
						cursor:(props.pointer ? "pointer" : "auto"),
					}}
					onClick={(event) => {
						if (props.onClick !== undefined) props.onClick(event);
					}}
				>
					<Image style={{width:150, height:150}} u={props.data.u} i={props.data.i} g={props.data.g} />
					<div>
						<p>{props.data.n}</p>
						<p>{props.data.d}</p>
						<p>{props.data.i}</p>
					</div>	
				</Card>
			);
		case false:
			return (
				<Card
				className="student-card"
				style={{
					cursor:(props.pointer ? "pointer" : "auto")
				}}
				onClick={(event) => {
					console.log("clicked");
					if (props.onClick !== undefined) props.onClick(event);
				}}
				>
					<Image style={{width:200, height:200}} u={props.data.u} i={props.data.i} g={props.data.g} />
					<p className="name">{props.data.n}</p>
					<p className="roll">{props.data.i}</p>
					<p className="dept">{props.data.p}, {props.data.d}</p>
					<div className="more-data">
					<div><AccountBalanceRounded /><p>{props.data.r.length > 0 ? props.data.r + ", " : ""} {props.data.h}</p></div>
					<div><HomeRounded /><p>{props.data.a}</p></div>
					<div><InvertColorsRounded /><p>{props.data.b}</p></div>
					{(props.data.u.length > 0 )? <div><EmailRounded /><p><a href={`mailto:${props.data.u}@iitk.ac.in`}>{props.data.u}@iitk.ac.in</a></p></div> : ""}
					</div>
					{props.children}
				</Card>
			);
	}
	return (props.compact
		? (
		<Card
			className="student-card-compact"
			style={{
				cursor:(props.pointer ? "pointer" : "auto"),
			}}
			onClick={(event) => {
				if (props.onClick !== undefined) props.onClick(event);
			}}
		>
			<Image style={{width:150, height:150}} u={props.data.u} i={props.data.i} g={props.data.g} />
			<div>
				<p>{props.data.n}</p>
				<p>{props.data.d}</p>
				<p>{props.data.i}</p>
			</div>	
		</Card>
		)
		: (
		<Card
			className="student-card"
			style={{
				cursor:(props.pointer ? "pointer" : "auto")
			}}
			onClick={(event) => {
				console.log("clicked");
				if (props.onClick !== undefined) props.onClick(event);
			}}
		>
			<Image style={{width:200, height:200}} u={props.data.u} i={props.data.i} g={props.data.g} />
			<p className="name">{props.data.n}</p>
			<p className="roll">{props.data.i}</p>
			<p className="dept">{props.data.p}, {props.data.d}</p>
			<div className="more-data">
			<div><AccountBalanceRounded /><p>{props.data.r.length > 0 ? props.data.r + ", " : ""} {props.data.h}</p></div>
			<div><HomeRounded /><p>{props.data.a}</p></div>
			<div><InvertColorsRounded /><p>{props.data.b}</p></div>
			{(props.data.u.length > 0 )? <div><EmailRounded /><p><a href={`mailto:${props.data.u}@iitk.ac.in`}>{props.data.u}@iitk.ac.in</a></p></div> : ""}
			</div>
			{props.children}
		</Card>
		)
	)
}

export default SCard;
