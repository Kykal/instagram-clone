//React
import { ReactNode } from "react";


//Typings
type Appbar = {
	children: ReactNode;
};


//Main component content
const Appbar = (props: Appbar): JSX.Element => {
	//Main component render
	return (
		<header
			className='sticky top-0 left-0 right-0 w-full border-b border-neutral-300 h-11'
		>
			{props.children}
		</header>
	);
};


export default Appbar; //Export main component
