//NextJS
'use client';

//ReactJS
import { MutableRefObject } from "react";


//Components
import Portal from "@/components/Portal";


//Typings
type Menu = {
	children: any;
	onClose: () => void;
	//ref: MutableRefObject<undefined>;
};


//Main component content
const Menu = (props: Menu): JSX.Element => {
	//Main component render
	return (
		<Portal>
			<div
				className='absolute left-0 top-0 right-0 bottom-0 z-20'

				onClick={props.onClose}
			/>
			<menu
				className='absolute z-50 bg-white shadow'
			>
				{props.children}
			</menu>
		</Portal>
	);
};


export default Menu; //Export main component
