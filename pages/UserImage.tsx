import Avatar from "@mui/material/Avatar";

export default function Image(props) {
	return (
		<Avatar style={props.style} src={`http://home.iitk.ac.in/~${props.u}/dp`}>
		<Avatar style={props.style} src={`https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/${props.i}_0.jpg`}>
		<Avatar style={props.style} src={props.g === "M" ? "/GenericMale.png" : "/GenericFemale.png"}>
		</Avatar>
		</Avatar>
		</Avatar>
	);
}