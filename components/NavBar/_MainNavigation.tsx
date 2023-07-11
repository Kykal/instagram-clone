//MATERIAL DESIGN
//Components
import ListItemAnchor from '../UI/ListItemAnchor';
import ListItem from '../UI/ListItem';
//Icons
import {
	HiSearch
} from 'react-icons/hi';
import {
	BsCompass,
	BsCompassFill,
	BsChatHeart,
	BsChatHeartFill,
	BsHeart,
	BsPlusSquare,
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
type MainNavigation = {
	setItem: (item: string) => void;
}

//Main component content
const MainNavigation = (props: MainNavigation): JSX.Element => {	
	//Main component render
	return (
		<ul>
			<ListItemAnchor
				href='/'
				icon={<GoHome />}
				activeIcon={<GoHomeFill />}
			>
				Home
			</ListItemAnchor>
			<ListItem
				icon={<HiSearch />}
				disableActiveIcon
				onClick={() => props.setItem('search')}
			>
				Search
			</ListItem>
			<ListItemAnchor
				href='/explore'
				icon={<BsCompass />}
				activeIcon={<BsCompassFill />}
			>
				Explore
			</ListItemAnchor>
			<ListItemAnchor
				href='/reels'
				icon={<BiMoviePlay />}
				activeIcon={<BiSolidMoviePlay />}
			>
				Reels
			</ListItemAnchor>
			<ListItemAnchor
				href='/direct/inbox'
				icon={<BsChatHeart />}
				activeIcon={<BsChatHeartFill />}
			>
				Messages
			</ListItemAnchor>
			<ListItem
				icon={<BsHeart />}
			>
				Notifications
			</ListItem>
			<ListItem
				icon={<BsPlusSquare />}
			>
				Create
			</ListItem>
			<ListItemAnchor
				href='/kykal'
				icon={<FaRegUserCircle />}
				activeIcon={<FaUserCircle />}
			>
				Profile
			</ListItemAnchor>
		</ul>
	);
};


export default MainNavigation; //Export main component
