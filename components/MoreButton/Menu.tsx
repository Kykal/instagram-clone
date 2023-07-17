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
				<NavLink
					href={Routes.ACCOUNT_SETTINGS}
					icon={<MdSettings className='text-2xl' />}
				>
					Settings
				</NavLink>
			</ul>
			<ul>
				<NavLink
					href={Routes.ACTIVITY}
					icon={<TbHistoryToggle className='text-2xl' />}
				>
					Your Activity
				</NavLink>
			</ul>
			<ul>
				<NavLink
					href={Routes.ACTIVITY}
					icon={<PiFlagBanner className='text-2xl' />}
				>
					Saved
				</NavLink>
			</ul>
		</menu>
	);
};


export default Menu; //Export main component
