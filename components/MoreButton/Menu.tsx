//NextJS
import Link from 'next/link';


//Configurations
import Routes from '@/configuration/routes';


//MATERIAL DESIGN
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


//Components
import ReportButton from './_ReportButton';
import ChangeTheme from './_ChangeTheme';
import Divider from '../UI/Divider';


//Main component content
const Menu = (): JSX.Element => {
	//Main component render
	return(
		<div
			className='more-menu w-64'
		>
			<div
				className='relative flex h-auto'
			>
				<div
					className='flex flex-col gap-2 w-full'
				>
					<MenuList />
					<Divider />
					<AuthMenu />
				</div>
				<div
					className='absolute top-0 left-0 translate-x-full w-64'
				>
					a
				</div>
			</div>
		</div>
	);
};


export default Menu; //Export main component


const MenuList = () => {
	return(
		<menu>
			<li>
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
			</li>
			<li>
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
			</li>
			<li>
				<Link
					href={Routes.SAVED}
					className='more-menu-item'
					title='Saved'
				>
					<PiFlagBanner className='text-2xl' />
					<span>
						Saved
					</span>
				</Link>
			</li>
			<li>
				<ChangeTheme />
			</li>
			<li>
				<ReportButton />
			</li>
		</menu>
	);
}


const AuthMenu = () => {
	return(
		<menu>
			<li>
				<button
					className='more-menu-item'
					disabled
				>
					Switch accounts
				</button>
			</li>
			<li>
				<button
					className='more-menu-item'
					disabled
				>
					Log out
				</button>
			</li>
		</menu>
	);
}
