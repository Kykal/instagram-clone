//NextJS
import { usePathname } from "next/navigation";


//Configuration
import Routes from "@/configuration/routes";


//MATERIAL DESIGN
//Components
import NavLink from "./UI/NavLink";
//Icons
import {
	GoHome,
	GoHomeFill,
} from 'react-icons/go';


//Typings
type HomeAnchorNavLink = {
	isSectionActive?: boolean;
}


//Main component content
const HomeAnchorNavLink = ({isSectionActive}: HomeAnchorNavLink): JSX.Element => {


	//NextJS
	const pathname = usePathname();

	const isActive = pathname === Routes.HOME;

	const icon = isActive
		? <GoHomeFill className='text-2xl' />
		: <GoHome className='text-2xl' />;


	//Main component render
	return (
		<NavLink
			href={Routes.HOME}

			icon={icon}
			isSectionActive={isSectionActive}

			className={`nav-item`}
			data-is-active={isActive}
		>
			Home
		</NavLink>
	);
};


export default HomeAnchorNavLink; //Export main component
