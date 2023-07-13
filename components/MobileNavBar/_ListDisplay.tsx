//NextJS
import Image from "next/image";


//Constants
import { profilePictureUrl } from "@/constants";


//MATERIAL DESIGN
//Components
import ActionIconAnchor from "../UI/ActionIconAnchor";
//Icons
import {
	BsCompass,
	BsCompassFill,
	BsChatHeart,
	BsChatHeartFill,
} from 'react-icons/bs';
import {
	BiMoviePlay,
	BiSolidMoviePlay,
} from 'react-icons/bi';
import {
	GoHome,
	GoHomeFill,
} from 'react-icons/go';


//Components
import CreateNavLink from "../CreateNavLink";
import NavItem from "./_NavItem";


//Typing
import type { NavItem as NavItemType } from "./_NavItem";


//Main component content
const ListDisplay = (): JSX.Element => {

	const navItems: NavItemType[] = [
		{
			url: '/',
			icon: <GoHome className='text-2xl' />,
			activeIcon: <GoHomeFill className='text-2xl' />,
		},
		{
			url: '/explore',
			icon: <BsCompass className='text-2xl' />,
			activeIcon: <BsCompassFill className='text-2xl' />,
		},
		{
			url: '/reels',
			icon: <BiMoviePlay className='text-2xl' />,
			activeIcon: <BiSolidMoviePlay className='text-2xl' />,
		},
		{
			icon: <CreateNavLink />,
		},
		{
			url: '/direct/inbox',
			icon: <BsChatHeart className='text-2xl' />,
			activeIcon: <BsChatHeartFill className='text-2xl' />,
		}
	];


	//Main component render
	return (
		<ul
			className='h-9 w-full flex items-center justify-evenly gap-2'
		>
			{navItems.map( (navItem, index) => (
				<NavItem
					key={`mobile-nav-item-${index}`}
					{...navItem}
				/>
			) )}
			<li
				className='h-full'
			>
				<ActionIconAnchor
					href='/kykal'
					className='h-full'
					disableActiveIcon
				>
					<Image
						src={profilePictureUrl}
						alt='Profile picture'
						width={100}
						height={100}
						className='h-full rounded-full'
					/>
				</ActionIconAnchor>
			</li>
		</ul>
	);
};


export default ListDisplay; //Export main component
