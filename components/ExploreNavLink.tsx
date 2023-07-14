//NextJS
import Routes from '@/configuration/routes';
import { usePathname } from 'next/navigation';


//MATERIAL DESIGN
//Icon
import {
	BsCompass,
	BsCompassFill,
} from 'react-icons/bs';
import NavLink from './UI/NavLink';


//Typings
type ExploreNavLink = {
	isSectionActive?: boolean;
}


//Main component content
const ExploreNavLink = ({isSectionActive}: ExploreNavLink): JSX.Element => {

	//NextJS
	const pathname = usePathname();

	const isActive = Routes.EXPLORE === pathname;

	const icon = isActive ? <BsCompassFill className='text-2xl' /> : <BsCompass className='text-2xl' />;

	
	//Main component render
	return (
		<NavLink
			href={Routes.EXPLORE}
			icon={icon}

			isSectionActive={isSectionActive}
			data-is-active={isActive}
		>
			Explore
		</NavLink>
	);
};


export default ExploreNavLink; //Export main component
