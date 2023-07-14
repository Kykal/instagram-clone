//Configuration
import Routes from "@/configuration/routes";


//MATERIAL DESIGN
//Components
import NavLink from "./UI/NavLink";
//Icons
import {
	RiPolaroid2Line,
} from 'react-icons/ri';


//Main component content
const InstagramButton = (): JSX.Element => {
	//Main component render
	return (
		<NavLink
			href={Routes.HOME}

			icon={<RiPolaroid2Line className='text-2xl' />}

			title='Home'
			aria-label='Home'

			className='h-full'
		/>
	);
};


export default InstagramButton; //Export main component
