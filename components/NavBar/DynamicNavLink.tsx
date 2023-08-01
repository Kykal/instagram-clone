//NextJS
import { usePathname } from 'next/navigation';


//Configurations
import Routes from "@/configuration/routes";


//MATERIAL DESIGN
//Components
import NavLink from '../UI/NavLink';


//Typings
type DynamicNavLink = {
	url: Routes;
	label: string;
	isSectionActive: boolean;
	icon: JSX.Element;
	activeIcon: JSX.Element;
}


//Main component content
const DynamicNavLink = (props: DynamicNavLink): JSX.Element => {

	//NextJS
	const pathname = usePathname();

	const isActive = props.url === pathname;

	const dynamicIcon = isActive ? props.activeIcon : props.icon;


	//Main component render
	return (
		<NavLink
			href={props.url}

			icon={dynamicIcon}
			isSectionActive={props.isSectionActive}

			className={`nav-item`}
			data-is-active={isActive}
		>
			{props.label}
		</NavLink>
	);
};


export default DynamicNavLink; //Export main component
