//React
import { createPortal } from "react-dom";


//Components
import Menu from "./Menu";


//Typings
type MorePortal = {
	opened: boolean;
	onClose: () => void;
}


//Main component content
const MorePortal = ({opened, onClose}: MorePortal): JSX.Element | null => {

	
	if(!opened){
		return null;
	}
	
	const isClient = typeof window !== "undefined";
	const target = document.body;
	
	
	//Main component render
	return (
		<>
			{isClient && createPortal(
				<Menu
					onClose={onClose}
				/>,
				target,
			)}
		</>
	);
};


export default MorePortal; //Export main component
