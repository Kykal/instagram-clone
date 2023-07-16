//Configurations
import Routes from "@/configuration/routes";


//MATERIAL DESIGN
//Components
import NavLink from "../UI/NavLink";
//Icons
import {
	RiPolaroid2Line,
} from 'react-icons/ri';


//Typings
type InstagramButton = {
	className?: string;
}


//Main component content
const InstagramButton = ({className}: InstagramButton): JSX.Element => {
	//Main component render
	return (
		<NavLink
			href={Routes.HOME}

			icon={<RiPolaroid2Line className='text-2xl' />}

			title='Home'
			aria-label='Home'

			className={className}
		/>
	);
};


export default InstagramButton; //Export main component
