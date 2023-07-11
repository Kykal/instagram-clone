//MATERIAL DESIGN
//Components
import ActionIconAnchor from "../UI/ActionIconAnchor";
//Icons
import {
	BsCompass,
	BsCompassFill,
	BsChatHeart,
	BsChatHeartFill,
	BsPlusSquare,
	BsPlusSquareFill,
} from 'react-icons/bs';
import {
	BiMoviePlay,
	BiSolidMoviePlay,
} from 'react-icons/bi';
import {
	FaUserCircle,
	FaRegUserCircle,
} from 'react-icons/fa';
import {
	GoHome,
	GoHomeFill,
} from 'react-icons/go';


//Typings
import type { ActionIconAnchor as ActionIconAnchorType } from '../UI/ActionIconAnchor';


//Main component content
const MobileNavBar = (): JSX.Element => {

	const items: ActionIconAnchorType[] = [
		{
			href: '/',
			children: <GoHome className='text-xl' />,
			activeIcon: <GoHomeFill className='text-xl' />,
		},
		{
			href: '/explore',
			children: <BsCompass className='text-xl' />,
			activeIcon: <BsCompassFill className='text-xl' />,
		},
		{
			href: '/reels',
			children: <BiMoviePlay className='text-xl' />,
			activeIcon: <BiSolidMoviePlay className='text-xl' />,
		},
		{
			href: '/create',
			children: <BsPlusSquare className='text-xl' />,
			activeIcon: <BsPlusSquareFill className='text-xl' />,
		},
		{
			href: '/direct/inbox',
			children: <BsChatHeart className='text-xl' />,
			activeIcon: <BsChatHeartFill className='text-xl' />,
		},
		{
			href: '/kykal',
			children: <FaRegUserCircle />,
			activeIcon: <FaUserCircle className='text-xl' />,
		}
	];


	//Main component render
	return(
		<>
			<nav
				className='flex gap-2 absolute bottom-0 left-0 right-0 sm:hidden h-12 w-full border-t border-neutral-200 p-1 bg-white'
			>
				<ul
					className='h-10 w-full flex justify-evenly items-center'
				>
					{items.map( (item, index) => (
						<li
							key={`mobile-navbar-item-${item.href}-${index}`}
							className='h-full'
						>
							<ActionIconAnchor
								href={item.href}
								activeIcon={item.activeIcon}
								className='h-full'
							>
								{item.children}
							</ActionIconAnchor>
						</li>
					) )}
				</ul>
			</nav>
		</>
	);
};


export default MobileNavBar; //Export main component
