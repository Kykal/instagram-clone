//NextJS
'use client';


//MATERIAL DESIGN
//Components
import ActionIconAnchor from "./UI/ActionIconAnchor";
//Icons
import {
	BsHeart,
	BsHeartFill,
} from 'react-icons/bs';
import {
	RiPolaroid2Line,
} from 'react-icons/ri';


//Components
import SearchInput from "./SearchInput";


//Main component content
const Header = (): JSX.Element => {
	//Main component render
	return (
		<header
			className='sm:hidden absolute top-0 left-0 w-full border-b border-neutral-200 h-14 flex items-center gap-2 p-2'
		>
			<HomeActionIcon />
			<SearchInput className='h-full' />
			<NotificationsActionIcon />
		</header>
	);
};


export default Header; //Export main component



const HomeActionIcon = () => {
	return(
		<ActionIconAnchor
			href='/'
			disableActiveIcon
			className='h-full'
		>
			<RiPolaroid2Line className='text-xl' />
		</ActionIconAnchor>
	);
}


const NotificationsActionIcon = () => {
	return(
		<ActionIconAnchor
			href='/notifications'
			activeIcon={<BsHeartFill className='text-xl' />}
			className='h-full'
		>
			<BsHeart className='text-xl' />
		</ActionIconAnchor>
	);
}
