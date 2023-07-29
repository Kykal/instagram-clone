//Configurations
import Routes from "@/configuration/routes";


//Components
import DynamicNavLink from "./DynamicNavLink";


//MATERIAL DESIGN
//Icons
import {
	BsSearch,
} from 'react-icons/bs';


//Main component content
const SearchNavLink = (): JSX.Element => {
	//Main component render
	return (
		<DynamicNavLink
			url={Routes.EXPLORE}
			icon={<BsSearch className='text-2xl' />}
			activeIcon={<BsSearch className='text-2xl font-medium' />}
			label='Explore'
			isSectionActive={false}
		/>
	);
};


export default SearchNavLink; //Export main component
