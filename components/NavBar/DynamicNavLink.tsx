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
const DynamicNavLink = ({ url, label, isSectionActive, icon, activeIcon }: DynamicNavLink): JSX.Element => {

	//NextJS
	const pathname = usePathname();

	const isActive = url === pathname;

	const dynamicIcon = isActive ? activeIcon : icon;


	//Main component render
	return (
		<NavLink
			href={url}

			icon={dynamicIcon}
			isSectionActive={isSectionActive}

			className={`nav-item`}
			data-is-active={isActive}
		>
			{label}
		</NavLink>
	);
};


export default DynamicNavLink; //Export main component
