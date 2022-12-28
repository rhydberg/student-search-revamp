import Card from "@mui/material/Card";
import SCard from "./SCard.tsx";
import React, {useState, useEffect} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import FadeAnim from "./FadeAnim.tsx";

/*
name={el.n}
dept={el.d}
home={el.a}
roll={el.i}
key={el.i}
*/

function Display(props) {
	const [pos, setPos] = useState(50);
	
	const students = props.toShow.map(el => {
		return (
			<SCard 
				data={el} 
				key={el.i}
				onClick={() => {props.displayCard(el)}}
				pointer={true}
				compact={true}
			/>
	);});
	
	const infiniteScrollImplementation = () =>{
		if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - 200) {
			setPos(pos + 50);
		}
	}
	
	useEffect(() => { //the infinite scroll part - changes no. elements displayed if scrolled to the end
		window.addEventListener("scroll", infiniteScrollImplementation);
		return () => {window.removeEventListener("scroll", infiniteScrollImplementation)}
	});
	
	useEffect(() => {setPos(50)},[props.toShow]); //reset pos to 50 if new search (i.e. if new props received)
	return (
		<div>
			<div id="count"><Card>{students.length} {students.length === 1 ? "result" : "results"} found</Card></div>
			<FadeAnim myname="display">
			{students.length > 1000 
				?<Card key="toomuch" style={{position:"absolute"}}>Too many results. Please narrow down your search.</Card>
				: students.slice(0,pos)}
			</FadeAnim>	
		</div>);
}

export default Display;
