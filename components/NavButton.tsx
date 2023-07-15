//React
import { HTMLAttributes } from "react";


//Typings
type NavButton = HTMLAttributes<HTMLButtonElement> & {
	children: string;

	icon: JSX.Element;
	onClick: () => void;
}


//Main component content
const NavButton = (props: NavButton): JSX.Element => {

	const { children, icon, onClick, ...propsAttributes } = props;

	//Main component render
	return (
		<button
			className='nav-item group xl:pl-[11px] w-full border border-transparent data-[section-active=true]:border-neutral-200'
			onClick={onClick}

			{...propsAttributes}
		>
			{icon}
			<span
				className='nav-item__label group-data-[section-active=true]:hidden'
			>
				{children}
			</span>
		</button>
	);
};


export default NavButton; //Export main component
