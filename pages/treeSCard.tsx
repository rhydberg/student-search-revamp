import SCard from "./SCard.tsx";
import Card from "@mui/material/Card"
import Button from "@mui/material/Button";
import React, {useState} from "react";

function TreeCard(props) {
// 	const [open, setOpen] = useState(false);

//	return (
// 		<div>
// 			{open
// 				? <div className="tree-view" key="open">
// 					{ props.baapu != undefined
// 						? <SCard
// 							pointer={true}
// 							compact={"ultra"}
// 							data={props.baapu}
// 							onClick={()=>{
// 								props.clearOverlay();
// 								setOpen(false);
// 								
// 								props.displayCard(props.baapu);
// 							}}
// 						/>
// 						: <Card>Not Available :(</Card>
// 					}
// 					<SCard 
// 						pointer={true}
// 						compact={true}
// 						data={props.data}
// 						onClick={()=>{
// 						props.clearOverlay();
// 							setOpen(false);
// 							
// 							props.displayCard(props.data);
// 						}}
// 					/>
// 					<div
// 						className="bacchas"
// 					>
// 					{props.bacchas.length > 0 
// 					?props.bacchas.map((el) => //this is fine because bacchas is *always* an array, no matter what - if no bacchas then it is an empty array - doQuery in App.js will simply return an empty array
// 						<SCard
// 							pointer={true}
// 							compact={"ultra"}
// 							data={el}
// 							key={el.i}
// 							onClick={()=>{
// 								setOpen(false);
// 								props.clearOverlay();
// 								props.displayCard(el);
// 							}}
// 						/>
// 					)
// 					: <Card>No bacchas :-\</Card>
// 					}
// 					</div>
// 				</div>
// 				: <SCard 
// 					data={props.data}
// 					compact={false}
// 					key="closed"
// 				>
// 					<Button
// 						onClick={(event) => {
// 							event.stopPropagation();
// 							setOpen(true);}}
// 					>Open Family Tree</Button>
// 				</SCard>}
// 		</div>
// 	);
	return (
		<div className="tree-view">
			{ props.baapu != undefined
				? <SCard
					pointer={true}
					compact={"ultra"}
					data={props.baapu}
					onClick={()=>{
						props.displayCard(props.baapu);
					}}
				/>
				: <Card>Not Available :(</Card>
			}
			<SCard 
				pointer={true}
				compact={true}
				data={props.data}
				onClick={()=>{
					props.displayCard(props.data);
				}}
			/>
			<div
				className="bacchas"
			>
			{props.bacchas.length > 0 
			?props.bacchas.map((el) => //this is fine because bacchas is *always* an array, no matter what - if no bacchas then it is an empty array - doQuery in App.js will simply return an empty array
				<SCard
					pointer={true}
					compact={"ultra"}
					data={el}
					key={el.i}
					onClick={()=>{
						props.displayCard(el);
					}}
				/>
			)
			: <Card>No bacchas :-\</Card>
			}
			</div>
		</div>
	);
}

export default TreeCard;
