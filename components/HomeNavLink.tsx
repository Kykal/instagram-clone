//Configurations
import Routes from "@/configuration/routes";


//MATERIAL DESIGN
//Icons
import {
	GoHome,
	GoHomeFill,
} from 'react-icons/go';


//Components
import DynamicNavLink from "./DynamicNavLink";


//Typings
type HomeNavLink = {
	isSectionActive: boolean;
}


//Main component content
const HomeNavLink = ({isSectionActive}: HomeNavLink): JSX.Element => {
	//Main component render
	return (
		<DynamicNavLink
			url={Routes.HOME}
			label='Home'

			icon={<GoHome className='text-2xl' />}
			activeIcon={<GoHomeFill className='text-2xl' />}
			isSectionActive={isSectionActive}
		/>
	);
};


export default HomeNavLink; //Export main component
