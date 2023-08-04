//React
import { HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import BackgroundOnClick from '../BackgroundOnClick';


//Typings
type Menu = HTMLAttributes<HTMLMenuElement> & {
	opened: boolean;
	onClose: () => void;
	top?: string;
	bottom?: string;
	left?: string;
	right?: string;

	children?: any;
}


//Main component content
const MenuPortal = (props: Menu): JSX.Element => {
	
	//React
	const isClient = typeof window !== 'undefined'; //Due the server does not know what 'window' is, we must assure that we are running this script client-side
	const target = document.body;


	//Main component render
	return (
		<>
			{ (isClient && props.opened) && createPortal(
				<>
					<RealMenu
						{...props}
					/>
					<BackgroundOnClick
						onClick={props.onClose}
					/>
				</>,
				target
			)}
		</>
	);
};


export default MenuPortal; //Export main component



const RealMenu = (props: Menu) => {

	const containerClassName = `ui-menu-container ${props.top} ${props.bottom} ${props.left} ${props.right}`.trim();

	
	return(
		<div
			className={containerClassName}
		>
			<menu
				{...props}
			>
				{props.children}
			</menu>
		</div>
	);
}
