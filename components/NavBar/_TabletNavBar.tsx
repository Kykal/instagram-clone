//MATERIAL DESIGN
//Components
import ActionIconAnchor from "../ui/ActionIconAnchor";
import ActionIcon from "../ui/ActionIcon";
//Icons

import {
	RiPolaroid2Line,
} from 'react-icons/ri';
//Icons
import {
	BsCompass,
	BsCompassFill,
	BsChatHeart,
	BsChatHeartFill,
	BsHeart,
	BsHeartFill,
} from 'react-icons/bs';
import {
	BiMoviePlay,
	BiSolidMoviePlay,
} from 'react-icons/bi';
import {
	GoHome,
	GoHomeFill,
} from 'react-icons/go';
//Icons
import {
	BsSearch,
} from 'react-icons/bs';
import CreateActionIconDialog from "./_CreateActionIconDialog";


//Typings
type TabletNavBar = {
	activeItem: string;
	setItem: (item: string) => void;
}


//Main component content
const TabletNavBar = (props: TabletNavBar): JSX.Element => {
	//Main component render
	return (
		<nav
			className='hidden sm:flex flex-col w-20 min-w-[5rem] left-0 top-0 h-screen p-4 border-r border-neutral-200 gap-8'
		>
			<LogoAnchor />
			<NavList
				{...props}
			/>
		</nav>
	);
};


export default TabletNavBar; //Export main component



const LogoAnchor = () => {
	return(
		<div
			className='flex items-center justify-center'
		>
			<ActionIconAnchor
				href='/'
				className='w-full'
				disableActiveIcon
			>
				<RiPolaroid2Line
					className='text-2xl'
				/>
			</ActionIconAnchor>
		</div>
	);
}


const NavList = (props: TabletNavBar) => {

	//Handlers
	const searchActiveItemHandler = () => {
		props.setItem('search');
	};

	const notificationsActiveItemHandler = () => {
		props.setItem('notifications');
	};

	return(
		<ul
			className='flex flex-col gap-2 grow'
		>
			<li>
				<ActionIconAnchor
					href='/'
					activeIcon={<GoHomeFill className='text-2xl' />}
					className='w-full'
				>
					<GoHome className='text-2xl' />
				</ActionIconAnchor>
			</li>
			<li>
				<ActionIcon
					className={`w-full border ${props.activeItem === 'search' ? 'border-neutral-200' : 'border-transparent'}`}
					onClick={searchActiveItemHandler}
				>
					<BsSearch className='text-2xl' />
				</ActionIcon>
			</li>
			<li>
				<ActionIconAnchor
					href='/explore'
					activeIcon={<BsCompassFill className='text-2xl' />}
					className='w-full'
				>
					<BsCompass className='text-2xl' />
				</ActionIconAnchor>
			</li>
			<li>
				<ActionIconAnchor
					href='/reels'
					activeIcon={<BiSolidMoviePlay className='text-2xl' />}
					className='w-full'
				>
					<BiMoviePlay className='text-2xl' />
				</ActionIconAnchor>
			</li>
			<li>
				<ActionIconAnchor
					href='/direct/inbox'
					activeIcon={<BsChatHeartFill className='text-2xl' />}
					className='w-full'
				>
					<BsChatHeart className='text-2xl' />
				</ActionIconAnchor>
			</li>
			<li>
				<ActionIcon
					className={`w-full border ${props.activeItem === 'notifications' ? 'border-neutral-200' : 'border-transparent'}`}
					onClick={notificationsActiveItemHandler}
					activeIcon={<BsHeartFill className='text-2xl' />}
					isActive={props.activeItem === 'notifications'}
				>
					<BsHeart className='text-2xl' />
				</ActionIcon>
			</li>
			<CreateActionIconDialog />
		</ul>
	);
}
