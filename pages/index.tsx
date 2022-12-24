import Options from "./Options.tsx";
import Display from "./Display.tsx";
import Overlay from "./Overlay.tsx";
import ReactDOM from 'react-dom/client';
import React, {useState, useEffect} from "react";
import {ThemeProvider,createTheme} from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import Fab from "@mui/material/Fab";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import {DarkModeSharp, LightModeRounded, HelpOutlineRounded, MailOutlineRounded} from "@mui/icons-material";
import STUDENTS from "./student_data_getter.tsx";
import {rollToYear} from "./parseData.tsx";
import TreeCard from "./treeSCard.tsx";

export default function Home(props) {

	const [students, setStudents] = useState([]);
	const [darkMode, setDarkMode]=useState(true);
	const [currDisp, setCurr] = useState();

	//server-side render doesn't have access to localStorage so start off with true
	
	//props should only change at start -> shouldn't change afterwards -> this should be good for loading darkmode pref at start 
	useEffect(() => {
		setDarkMode(localStorage.getItem("darkmode") !== "false")
	},[props]);

	const doQuery = (query) =>{
		return STUDENTS.filter((st) => {
			let ret = true;
			for (const key in query) {
				if (query[key].length > 0) { //all the stuff inside the if statement will only narrow it down because && used so can just not do anything to ret if length is 0
					if (key === "name") {
						let bits = query.name.toLowerCase().split(/\s+/);
						let bitslast = bits.pop();
						let stbits = st.n.toLowerCase().split(/\s+/)
						let bigtest = true;
						for (const item of bits) { //each item must match at least one stitem -> go through all stitems, if still none then return false, otherwise keep going
							let test = false;
							for (const stitem of stbits) {
								if (stitem === item) {
									test = true;
									break;
								}
							}
							if (!test) {
								bigtest = false;
								break;
							}
						}
						if (bigtest) { //if bigtest not yet false, check last bit
							let test = false;
							for (const stitem of stbits) {
								if (stitem.startsWith(bitslast)) {
									test = true;
									break;
								}
							}
							if (!test) {
								bigtest = false;
							}
						}
						if (!(bigtest)) { //no name matches -> check roll no, username
							ret = ret && (st.i.includes(query.name) || st.u.startsWith(query.name)); //if both are false, then ret becomes false - starts with for username to avoid anish -> Manish (with username manish) coming up
						} //else: this is when bigtest is true, i.e. the name matches the students actual name - then don't do anything because ret is true by default
					} else if (typeof(query[key]) === "string") { //gender or hometown
						ret = ret && (st[key[0]].toLowerCase().includes(query[key].toLowerCase()));
					} else if (key === "batch") {
						ret = ret && (query.batch.includes(rollToYear(st.i)));
					} else { //all the other stuff
						ret = ret && (query[key].includes(st[key[0]]));
					}
				}
			}
			return ret;
		});
	}

	const sendQuery = (query)=> {
		setStudents(doQuery(query));
	}

	const clearOverlay = ()=> {
		setCurr(undefined);
	}
	
	const displayElement = (element) => {
		clearOverlay();
		setCurr(element);
	}
	
	const displayCard = (student) =>{
		clearOverlay();
		setCurr(<TreeCard
			data={student}
			baapu={STUDENTS.filter((st) => (st.i === student.s))[0] /*TreeCard'll handle undefined*/}
			bacchas={doQuery({
				i:student.c //an array -> setQuery will check if roll number included - even if this is "Not Available", will just return an empty array
			})}
			displayCard={displayCard}
		/>);
	}

	useEffect(() => {
		if (darkMode) {
			document.body.style.backgroundColor = "#000";
		} else {
			document.body.style.backgroundColor = "#efefef";
		}
	},[darkMode]);

  
  	return (
    <div>
    <ThemeProvider theme={darkMode 
			? createTheme({
				palette:{
					mode: "dark",
				}
			})
			: createTheme({
				
			})
  	}>
  	<div className="buttons">
		<Fab
		  onClick={()=>{
					setDarkMode(!darkMode);
					localStorage.setItem("darkmode", !darkMode);}}
		>
		{darkMode ?
				<LightModeRounded color="background"/>
				: <DarkModeSharp color="background"/>}
		</Fab>
		<Fab
			onClick={() => {
				displayElement(
					<Card
						style={{
							padding:"10px"
						}}
					>
						<h1>Setting a custom DP</h1>
						<p>You can customise the image shown here by placing a custom image in your iitk webhome folder called dp.jpg/dp.png such that going to http://home.iitk.ac.in/~yourusername/dp opens up that particular picture.</p>
						<h1>How do I update the data shown here?</h1>
						<p>The data here is scraped from the Office Automation Portal. The data there can be updated via the Login Based Services > Student Profile > PI form . If you have had a branch change, please go to the ID Cell and update your ID Card to update your branch.</p>
						<p>The changes if any will be reflected in about a week. </p>
					</Card>
				);
			}}
		>
			<HelpOutlineRounded color="background"/>
		</Fab>
		<Fab
			style={{
				display:(students.length < 1000 && students.length > 0 ? "" : "none")
			}}
			onClick={() => {
				displayElement(
					<Card
						style={{
							padding:"10px",
							width:"80vw"
						}}
					>
						<p>Press the 'copy' button to copy all email addresses.</p>
						<div
							style={{
								height:"60vh",
								overflow:"auto"
						}}
						>
						{students.filter((el) => (el.u.length > 0)).map((el) => (el.u + "@iitk.ac.in")).join(", ")}
						</div>
						<Button 
							variant="contained"
							onClick={() => {
								navigator.clipboard.writeText(students.filter((el) => (el.u.length > 0)).map((el) => (el.u + "@iitk.ac.in")).join(", "));
							}}
						>Copy</Button>
					</Card>
				);
			}}
		>
			<MailOutlineRounded color="background"/>
		</Fab>
    </div>
	<Options
    	sendQuery={sendQuery}
    />
    <br/>
    <Display
    	toShow={students}
    	displayCard={displayCard}
    />
    <Overlay
    	clearOverlay={clearOverlay}
    >
    {currDisp !== undefined
    	? currDisp
    	: ""}
    </Overlay>
    </ThemeProvider>
    </div>
  );
}


