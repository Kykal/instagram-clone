//MATERIAL DESIGN
//Icons
import {
	IoHomeSharp,
	IoHomeOutline,
	IoSearch,
	IoSearchOutline,
} from "react-icons/io5";
import {
	BiSolidMoviePlay,
	BiMoviePlay,
	BiMessageRounded,
	BiSolidMessageRounded,
} from "react-icons/bi";


//Components
import AvatarAnchorButton from "./AvatarAnchorButton";
import IconAnchorButton from "./IconAnchorButton";


//Main component content
const BottomNavigation = (): JSX.Element => {

	const iconClassName = 'transiton-all aspect-square text-2xl group-hover:scale-110';


	const items = [
		{
			icon: <IoHomeOutline className={iconClassName} />,
			activeIcon: <IoHomeSharp className={iconClassName} />,
			href: '/',
		},
		{
			icon: <IoSearchOutline className={iconClassName} />,
			activeIcon: <IoSearch className={iconClassName} />,
			href: '/explore',
		},
		{
			icon: <BiMoviePlay className={iconClassName} />,
			activeIcon: <BiSolidMoviePlay className={iconClassName} />,
			href: '/reels',
		},
		{
			icon: <BiMessageRounded className={iconClassName} />,
			activeIcon: <BiSolidMessageRounded className={iconClassName} />,
			href: '/direct/inbox',
		},
	];


	//Main component render
	return (
		<nav
			className='fixed bottom-0 left-0 right-0 border-t border-neutral-300'
		>
			<ul
				className='flex items-center justify-between w-full h-full px-7'
			>
				{items.map( (item, index) => (
					<li
						key={`bottom-navigation-list-item-anchor-buttom-${index}`}
					>
						<IconAnchorButton
							href={item.href}
							activeIcon={item.activeIcon}
						>
							{item.icon}
						</IconAnchorButton>
					</li>
				) )}
				<li>
					<AvatarAnchorButton />
				</li>
			</ul>
		</nav>
	);
};


export default BottomNavigation; //Export main component
