import SCard from "./SCard.tsx";
import Card from "@mui/material/Card"
import Button from "@mui/material/Button";
import React, {useState} from "react";

function TreeCard(props) {
	const [open, setOpen] = useState(false);

	return (
		<div>
			{open
				? <div className="tree-view">
					<div>
					{ props.baapu != undefined
						? <SCard
							pointer={true}
							compact={true}
							data={props.baapu}
							onClick={()=>{
								setOpen(false);
								props.displayCard(props.baapu);
							}}
						/>
						: <Card>Not Available :(</Card>
					}
					</div>
					<div>
					<SCard 
						pointer={true}
						compact={true}
						data={props.data}
						onClick={()=>{
							setOpen(false);
							props.displayCard(props.data);
						}}
					/>
					</div>
					<div
						style={{
							display:"flex",
							width:"100%",
							height:"100px"
						}}
					>
					{props.bacchas.map((el) => //this is fine because bacchas is *always* an array, no matter what - if no bacchas then it is an empty array - doQuery in App.js will simply return an empty array
						<SCard
							pointer={true}
							compact={true}
							data={el}
							onClick={()=>{
								setOpen(false);
								props.displayCard(el);
							}}
						/>
					)}
					</div>
				</div>
				: <SCard data={props.data}>
					<Button
						onClick={(event) => {
							event.stopPropagation();
							setOpen(true);}}
					>Open Family Tree</Button>
				</SCard>}
		</div>
	);
}

export default TreeCard;
