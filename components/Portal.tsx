//NextJS
'use client';


//ReactJS
import { createPortal } from "react-dom";


//Typings
type Portal = {
	children: any;
};


//Main component content
const Portal = (props: Portal): JSX.Element => {
	//Main component render
	return (
		<>
			{createPortal(
				props.children,
				document.body
			)}
		</>
	);
};


export default Portal; //Export main component
