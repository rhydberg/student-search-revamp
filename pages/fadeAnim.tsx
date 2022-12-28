import React from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";


const  FadeAnim = React.forwardRef((props, ref) => {
// 	return (
// 		<TransitionGroup 
// 			style={props.style} 
// 			className={props.myname}
// 		>
// 		{React.Children.map(props.children, (child) => {
// 			return (
// 				<CSSTransition
// 					classNames="fade"
// 					timeout={300}
// 					mountOnEnter={true}
// 					unmountOnExit={true}
// 				>
// 				{child}
// 				</CSSTransition>
// 			);
// 		})}
// 		</TransitionGroup>
// 	);
	
	return (
		<TransitionGroup 
			style={props.style} 
			className={props.myname}
			appear={props.in}
		>
		{React.Children.map(props.children, (child) => {
			return (
				<CSSTransition
					classNames="fade"
					timeout={300}
					mountOnEnter={true}
					unmountOnExit={true}
				>
				{child}
				</CSSTransition>
			);
		})}
		</TransitionGroup>
	);
});

export default FadeAnim;