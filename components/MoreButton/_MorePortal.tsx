//React
import { createPortal } from "react-dom";


//Components
import Menu from "./Menu";


//Typings
type MorePortal = {
	opened: boolean;
}


//Main component content
const MorePortal = ({opened}: MorePortal): JSX.Element | null => {

	
	if(!opened){
		return null;
	}
	
	const isClient = typeof window !== "undefined";
	const target = document.body;
	
	
	//Main component render
	return (
		<>
			{isClient && createPortal(
				<Menu />,
				target,
			)}
		</>
	);
};


export default MorePortal; //Export main component
