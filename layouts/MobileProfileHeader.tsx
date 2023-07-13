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
					href='/account/settings'
					title='Settings'
					aria-label='Settings'

					startIcon={<MdSettings className='text-2xl' />}

					className='h-full'
				>
					Settings
				</NavLink>
				<h1
					className='font-medium'
				>
					{props.username}
				</h1>
				<NavLink
					href='/explore/people'
					title='Explore people'
					aria-label='Explore people'
					className='h-full'

					startIcon={<IoPersonAddOutline className='text-2xl' />}
				>
					Explore people
				</NavLink>
			</div>
		</header>
	);
};


export default MobileProfileHeader; //Export main component
