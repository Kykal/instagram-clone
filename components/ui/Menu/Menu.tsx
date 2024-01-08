//NextJS
'use client';

//ReactJS
import { MutableRefObject } from "react";


//Components
import Portal from "@/components/Portal";


//Typings
type Menu = {
	children: any;
	//onClose: () => void;
	//ref: MutableRefObject<undefined>;
};


//Main component content
const Menu = (props: Menu): JSX.Element => {
	//Main component render
	return (
		<Portal>
			<menu>
				{props.children}
			</menu>
		</Portal>
	);
};


export default Menu; //Export main component
