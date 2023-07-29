//React
import { createPortal } from "react-dom";


//Components
import Menu from "./Menu";
import BackgroundOnClick from "../BackgroundOnClick";


//Typings
type MenuPortal = {
	close: () => void;
}


//Main component content
const MenuPortal = (props: MenuPortal): JSX.Element => {

	const isClient = typeof window !== "undefined";
	const target = document.body;


	//Main component render
	return (
		<>
			{isClient && createPortal(
				<>
					<Menu />
					<BackgroundOnClick
						onClick={props.close}
					/>
				</>,
				target
			)}
		</>
	);
};


export default MenuPortal; //Export main component
