//React
import { createPortal } from "react-dom";


//Components
import Menu from "./Menu";
import BackgroundOnClick from "../BackgroundOnClick";


//Typings
type MorePortal = {
	opened: boolean;
	closeMenu: () => void;
}


//Main component content
const MorePortal = ({opened, closeMenu}: MorePortal): JSX.Element | null => {

	
	if(!opened){
		return null;
	}
	
	const isClient = typeof window !== "undefined";
	const target = document.body;
	
	
	//Main component render
	return (
		<>
			{isClient && createPortal(
				<>
					<Menu />
					<BackgroundOnClick
						onClick={closeMenu}
					/>
				</>,
				target,
			)}
		</>
	);
};


export default MorePortal; //Export main component
