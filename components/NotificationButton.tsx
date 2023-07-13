//NextJS
import { usePathname } from 'next/navigation';


//MATERIAL DESIGN
//Components
import NavLink from "./UI/NavLink";
//Icons
import {
	BsHeart,
	BsHeartFill,
} from 'react-icons/bs';


//Main component content
const NotificationButton = (): JSX.Element => {

	//NextJS
	const pathname = usePathname();

	const url = '/direct/inbox';

	const isActive = pathname === url;

	//Main component render
	return (
		<NavLink
			href={url}
			startIcon={isActive ? <BsHeartFill className='text-xl' /> : <BsHeart className='text-xl' />}

			title='Messages'
			aria-label='Notifications'

			className='h-full md:h-auto'
		>
			Notifications
		</NavLink>
	);
};


export default NotificationButton; //Export main component
