//MATERIAL DESIGN
//Components
import NavLink from '@/components/UI/NavLink';
//Icons
import {
	MdSettings,
} from 'react-icons/md';
import {
	IoPersonAddOutline
} from 'react-icons/io5';
import Routes from '@/configuration/routes';


//Typings
type MobileProfileHeader = {
	username: string;
}


//Main component content
const MobileProfileHeader = (props: MobileProfileHeader): JSX.Element => {
	//Main component render
	return (
		<header
			className='sm:hidden absolute top-0 left-0 w-full border-b border-neutral-200 p-2 bg-white'
		>
			<div
				className='h-9 flex items-center justify-between'
			>
				<NavLink
					href={Routes.ACCOUNT_SETTINGS}
					title='Settings'
					aria-label='Settings'

					icon={<MdSettings className='text-2xl' />}

					className='h-full'
				/>
				<h1
					className='font-medium'
				>
					{props.username}
				</h1>
				<NavLink
					href={Routes.EXPLORE_PEOPLE}
					title='Explore people'
					aria-label='Explore people'
					className='h-full'

					icon={<IoPersonAddOutline className='text-2xl' />}
				/>
			</div>
		</header>
	);
};


export default MobileProfileHeader; //Export main component
