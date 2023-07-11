//React
import { useState } from "react";
import { createPortal } from "react-dom";


//MATERIAL DESIGN
//Components
import ActionIconAnchor from "../ui/ActionIconAnchor";
import ActionIcon from "../ui/ActionIcon";
import Divider from "../ui/Divider";
//Icons
import {
	MdClose,
} from 'react-icons/md';
import {
	RiPolaroid2Line,
} from 'react-icons/ri';
//Icons
import {
	BsCompass,
	BsCompassFill,
	BsChatHeart,
	BsChatHeartFill,
	BsPlusSquare,
	BsPlusSquareFill,
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


//Components
import Dialog from 'native-react-dialog';


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
			<CreateActionButton />
		</ul>
	);
}


const CreateActionButton = () => {

	//React
	const [ isOpen, setIsOpen ] = useState<boolean>(false);

	//Handlers
	const openHandler = () => {
		setIsOpen(true);
	};

	const closeHandler = () => {
		setIsOpen(false);
	};

	const target = document.body;
	const content = (
		<Dialog
			open={isOpen}
			onClose={closeHandler}
			className='rounded-md p-0 container max-w-2xl w-auto'
		>
			<header
				className='relative p-2'
			>
				<h1
					className='text-center font-medium'
					title='Create new post'
					aria-label='Create new post'
				>
					Create new post
				</h1>
				<ActionIcon
					onClick={closeHandler}
					className='absolute right-4 top-2'
					title='Close create dialog'
					aria-label='Close create dialog button'
				>
					<MdClose
						className='fill-neutral-400 text-xl'
						aria-label='Close icon'
					/>
				</ActionIcon>
			</header>
			<Divider />
			<main
				className='p-2 flex flex-col gap-2 items-center justify-center h-96'
			>
				<span
					className='text-xl'
					title='Drag here pictures and videos'
					aria-label='Drag here pictures and videos'
				>
					Drag here pictures and videos
				</span>
				<button
					className='bg-sky-500 text-sm rounded-md px-4 py-2 text-white font-medium active:bg-sky-700'
					title='Select from computer'
					aria-label='Select from computer'
				>
					Select from computer
				</button>
			</main>
		</Dialog>
	);

	return(
		<>
			<li>
				<ActionIcon
					className={`w-full border border-transparent`}
					activeIcon={<BsPlusSquareFill className='text-2xl' />}
					isActive={isOpen}
					onClick={openHandler}
				>
					<BsPlusSquare className='text-2xl' />
				</ActionIcon>
			</li>
			{createPortal(
				content,
				target,
			)}
		</>
	);
}
