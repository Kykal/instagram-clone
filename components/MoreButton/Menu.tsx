//NextJS
import Link from 'next/link';


//React
import useDisclosure from '@/hooks/useDisclosure';


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
import {
	BsChevronLeft,
	BsSun,
	BsMoon,
} from 'react-icons/bs';


//Components
import ReportButton from './_ReportButton';
import ChangeTheme from './_ChangeTheme';
import Divider from '../UI/Divider';
import IconButton from '../UI/IconButton';


//Typings
type MenuList = {
	onThemeClick: () => void;
}
type MainOptions = {
	onThemeClick: () => void;
	showTheme: boolean;
}
type ThemeOptions = {
	showTheme: boolean;
	closeTheme: () => void;
}



//Main component content
const Menu = (): JSX.Element => {

	//React
	const [ showThemeOptions, { open, close } ] = useDisclosure();


	//Main component render
	return(
		<div
			className='more-menu'
		>
			<div
				className='relative w-64 transition-all h-[345px] data-[theme-options=true]:h-[105px]'
				data-theme-options={showThemeOptions}
			>
				<MainOptions
					onThemeClick={open}
					showTheme={showThemeOptions}
				/>
				<ThemeOptions
					showTheme={showThemeOptions}
					closeTheme={close}
				/>
			</div>
		</div>
	);
};


export default Menu; //Export main component



const MenuList = (props: MenuList) => {
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
				<ChangeTheme
					onClick={props.onThemeClick}
				/>
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


const MainOptions = (props: MainOptions) => {
	
	const translate = props.showTheme ? '-translate-x-full' : 'translate-x-0';

	
	return(
		<div
			className={`px-2 py-2.5 transition-all ${translate}`}
		>
			<div
				className='flex flex-col gap-2 w-full'
			>
				<MenuList
					onThemeClick={props.onThemeClick}
				/>
				<Divider />
				<AuthMenu />
			</div>
		</div>
	);
}


const ThemeOptions = (props: ThemeOptions) => {

	const translate = props.showTheme ? 'translate-x-0' : 'translate-x-full';

	return(
		<div
			className={`absolute px-2 py-2.5 transition-all top-0 left-0 ${translate} w-64 flex flex-col gap-2`}
		>
			<div
				className='flex justify-between items-center h-7'
			>
				<IconButton
					onClick={props.closeTheme}
					className='h-full'
				>
					<BsChevronLeft />
				</IconButton>
				<span
					className='font-medium h-full flex items-center justify-center'
				>
					Switch appearance
				</span>
				<BsSun className='h-full' />
			</div>
			<Divider />
			<button
				className='flex items-center justify-between p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md'
			>
				<span>
					Dark mode
				</span>
			</button>
		</div>
	);
}
