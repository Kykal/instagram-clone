//MATERIAL DESIGN
//Components
import NavLink from "./UI/NavLink";
//Icons
import {
	RiPolaroid2Line,
} from 'react-icons/ri';


//Main component content
const HomeButton = (): JSX.Element => {
	//Main component render
	return (
		<NavLink
			href='/'
			startIcon={<RiPolaroid2Line className='text-2xl' />}

			title='Home'
			aria-label='Home'

			className='h-full md:h-auto'
		>
			Home
		</NavLink>
	);
};


export default HomeButton; //Export main component
