import Modal from "@mui/material/Modal";
import React, {useState, useEffect} from "react";

export default function Overlay(props) {
	const [open, setOpen] = useState(false);
	
	//if props.children is not an empty string, open the backdrop
	useEffect(() => {
		if (props.children !== "") setOpen(true);
	}, [props.children]);
	
	return(
		<Modal
			style={{
				display:"flex",
				alignItems:"center",
				justifyContent:"space-evenly"
			}}
			open={open}
			onClick={() => {
				setOpen(false);
				props.clearOverlay();
			}}
		>
		<div
			onClick={(event) => {event.stopPropagation();}}
		>
		{props.children}
		</div>
		</Modal>
	);
}