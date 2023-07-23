//React
import { createPortal } from "react-dom";


//Components
import Menu from "./Menu";
import BackgroundOnClick from "../BackgroundOnClick";


//Typings
import { Theme } from "@/utils/theme/typings";
type MorePortal = {
	opened: boolean;
	closeMenu: () => void;
	theme: Theme
	toggleTheme: () => void;
}


//Main component content
const MorePortal = (props: MorePortal): JSX.Element | null => {

	
	if(!props.opened){
		return null;
	}
	
	const isClient = typeof window !== "undefined";
	const target = document.body;
	
	
	//Main component render
	return (
		<>
			{isClient && createPortal(
				<>
					<Menu
						theme={props.theme}
						toggleTheme={props.toggleTheme}
					/>
					<BackgroundOnClick
						onClick={props.closeMenu}
					/>
				</>,
				target,
			)}
		</>
	);
};


export default MorePortal; //Export main component
