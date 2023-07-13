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


//Main component content
const MobileNavBar = (): JSX.Element => {

	const navitems = [
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
		<nav
			className='absolute bottom-0 border-t border-neutral-200 w-screen p-2'
		>
			<ul
				className='h-9 w-full flex items-center justify-evenly gap-2'
			>
				{navitems.map( (navitem, index) => (
					<li
						key={`navitem-${index}`}
						className='h-full'
					>
						{navitem.url ? (
								<ActionIconAnchor
									href={navitem.url}
									className='h-full'
									activeIcon={navitem.activeIcon}
								>
									{navitem.icon}
								</ActionIconAnchor>
						) : (
							<>
								{navitem.icon}
							</>
						)}
					</li>
				) )}
			</ul>
		</nav>
	);
};


export default MobileNavBar; //Export main component
