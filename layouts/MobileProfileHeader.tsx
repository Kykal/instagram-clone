//MATERIAL DESIGN
//Components
import ActionIconAnchor from "@/components/UI/ActionIconAnchor";
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
			className='sm:hidden absolute top-0 left-0 w-full border-b border-neutral-200  p-2'
		>
			<div
				className='h-9 flex items-center justify-between'
			>
				<ActionIconAnchor
					href='/account/settings'
					title='Settings'
					aria-label='Settings'
					disableActiveIcon
					className='h-full'
				>
					<MdSettings className='text-2xl' />
				</ActionIconAnchor>
				<h1
					className='font-medium'
				>
					{props.username}
				</h1>
				<ActionIconAnchor
					href='/explore/people'
					title='Explore people'
					aria-label='Explore people'
					disableActiveIcon
					className='h-full'
				>
					<IoPersonAddOutline className='text-2xl' />
				</ActionIconAnchor>
			</div>
		</header>
	);
};


export default MobileProfileHeader; //Export main component
