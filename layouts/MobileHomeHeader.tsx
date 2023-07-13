//NextJS
'use client';


//MATERIAL DESIGN
//Components
import ActionIconAnchor from '@/components/UI/ActionIconAnchor';
//Icons
import {
	BsHeart,
	BsHeartFill,
} from 'react-icons/bs';
import {
	RiPolaroid2Line,
} from 'react-icons/ri';


//Components
import SearchInput from '@/components/SearchInput';


//Main component content
const MobileHomeHeader = (): JSX.Element => {
	//Main component render
	return (
		<header
			className='sm:hidden absolute top-0 left-0 w-full border-b border-neutral-200  p-2'
		>
			<div
				className='h-9 flex items-center gap-2'
			>
				<HomeActionIcon />
				<SearchInput />
				<NotificationsActionIcon />
			</div>
		</header>
	);
};


export default MobileHomeHeader; //Export main component



const HomeActionIcon = () => {
	return(
		<ActionIconAnchor
			href='/'
			disableActiveIcon
			className='h-full'
		>
			<RiPolaroid2Line className='text-2xl' />
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
