//NextJS
import Link from 'next/link';


//Configurations
import Routes from '@/configuration/routes';


//MATERIAL DESIGN
//Components
import NavLink from '../UI/NavLink';
//Icons
import {
	MdSettings,
} from 'react-icons/md';
import {
	TbHistoryToggle,
} from 'react-icons/tb';
import {
	PiFlagBanner,
} from 'react-icons/pi';


//Typings
type Menu = {
	onClose: () => void;
}


//Main component content
const Menu = ({onClose}: Menu): JSX.Element => {
	//Main component render
	return(
		<menu
			className='more-menu'
			onMouseLeave={onClose}
		>
			<ul>
				<Link
					href={Routes.ACCOUNT_SETTINGS}
					className='more-menu-item'
					title='Settings'
				>
					<MdSettings className='text-2xl' />
					<span>
						Settings
					</span>
				</Link>
			</ul>
			<ul>
				<Link
					href={Routes.ACTIVITY}
					className='more-menu-item'
					title='Your Activity'
				>
					<TbHistoryToggle className='text-2xl' />
					<span>
						Your Activity
					</span>
				</Link>
			</ul>
			<ul>
				<Link
					href={Routes.ACCOUNT_SETTINGS}
					className='more-menu-item'
					title='Saved'
				>
					<PiFlagBanner className='text-2xl' />
					<span>
						Saved
					</span>
				</Link>
			</ul>
		</menu>
	);
};


export default Menu; //Export main component
