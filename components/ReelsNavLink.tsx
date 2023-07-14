//NextJS
import Routes from '@/configuration/routes';


//MATERIAL DESIGN
//Icons
import {
	BiMoviePlay,
	BiSolidMoviePlay,
} from 'react-icons/bi';


//Components
import DynamicNavLink from './DynamicNavLink';


//Typings
type ReelsNavLink = {
	isSectionActive: boolean;
}


//Main component content
const ReelsNavLink = ({isSectionActive}: ReelsNavLink): JSX.Element => {
	//Main component render
	return (
		<DynamicNavLink
			url={Routes.REELS}
			label='Reels'
			icon={<BiMoviePlay className='text-2xl' />}
			activeIcon={<BiSolidMoviePlay className='text-2xl' />}

			isSectionActive={isSectionActive}
		/>
	);
};


export default ReelsNavLink; //Export main component
