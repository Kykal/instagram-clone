//MATERIAL DESIGN
//Components
import ActionIconAnchor from "../UI/ActionIconAnchor";


//Typings
export type NavItem = {
	icon: JSX.Element;
	
	url?: string;
	activeIcon?: JSX.Element;
}


//Main component content
const NavItem = (navItem: NavItem): JSX.Element => {
	//Main component render
	return (
		<li
			className='h-full'
		>
			{navItem.url ? (
					<ActionIconAnchor
						href={navItem.url}
						className='h-full'
						activeIcon={navItem.activeIcon}
					>
						{navItem.icon}
					</ActionIconAnchor>
			) : (
				<>
					{navItem.icon}
				</>
			)}
		</li>
	);
};


export default NavItem; //Export main component
