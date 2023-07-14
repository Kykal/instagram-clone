//NextJS
import Routes from '@/configuration/routes';

//Icon
import {
	BsCompass,
	BsCompassFill,
} from 'react-icons/bs';


//Components
import DynamicNavLink from './DynamicNavLink';


//Typings
type ExploreNavLink = {
	isSectionActive: boolean;
}


//Main component content
const ExploreNavLink = ({isSectionActive}: ExploreNavLink): JSX.Element => {
	//Main component render
	return (
		<DynamicNavLink
			url={Routes.EXPLORE}
			icon={<BsCompass className='text-2xl' />}
			activeIcon={<BsCompassFill className='text-2xl' />}
			label='Explore'

			isSectionActive={isSectionActive}
		/>
	);
};


export default ExploreNavLink; //Export main component
