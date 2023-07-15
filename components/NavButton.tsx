//React
import { HTMLAttributes } from "react";


//Typings
type NavButton = HTMLAttributes<HTMLButtonElement> & {
	children: string;

	icon: JSX.Element;
	onClick: () => void;
	activeSection: string;
}


//Main component content
const NavButton = (props: NavButton): JSX.Element => {

	const { children, icon, onClick, activeSection, ...propsAttributes } = props;


	const isThisActive = activeSection === 'create';


	//Main component render
	return (
		<button
			className={`nav-item xl:pl-[11px] w-full border ${isThisActive ? 'border-neutral-200' : 'border-transparent'}`}
			onClick={onClick}

			{...propsAttributes}
		>
			{icon}
			{!Boolean(activeSection) && (
				<span
					className='nav-item__label'
				>
					{children}
				</span>
			)}
		</button>
	);
};


export default NavButton; //Export main component
