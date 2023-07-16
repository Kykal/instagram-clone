//NextJS
import Link from 'next/link';
import { usePathname } from 'next/navigation';


//Configurations
import Routes from '@/configuration/routes';


//MATERIAL DESIGN
//Icons
import {
	BsHeart,
	BsHeartFill,
} from 'react-icons/bs';


//Main component content
const NotificationAnchorIconButton = (): JSX.Element => {

	//NextJS
	const pathname = usePathname();

	const isActive = pathname === Routes.NOTIFICATIONS;

	//Main component render
	return (
		<Link
			href={Routes.NOTIFICATIONS}

			title='Messages'
			aria-label='Notifications'

			className='h-full icon-button'
		>
			{isActive ? <BsHeartFill className='text-xl' /> : <BsHeart className='text-xl' />}
		</Link>
	);
};


export default NotificationAnchorIconButton; //Export main component
