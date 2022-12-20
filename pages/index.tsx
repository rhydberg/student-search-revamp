import Options from "./Options.tsx";
import Display from "./Display.tsx";
import Overlay from "./Overlay.tsx";
import ReactDOM from 'react-dom/client';
import React, {useState, useEffect} from "react";
import {ThemeProvider,createTheme} from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import Fab from "@mui/material/Fab";
import {DarkModeSharp, LightModeRounded} from "@mui/icons-material";
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
					if (typeof(query[key]) === "string") { //gender, hometown or name
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
	});

  
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
      <Fab className="fab"
      onClick={()=>{
  				setDarkMode(!darkMode);
  				localStorage.setItem("darkmode", !darkMode);}}
  	>
  	{darkMode ?
  			<LightModeRounded color="background"/>
  			: <DarkModeSharp color="background"/>}
    </Fab>

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


