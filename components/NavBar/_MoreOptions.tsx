//React
import { MouseEvent } from 'react';
import useDisclosure from '@/hooks/useDisclosure';


//MATERIAL DESIGN
//Components
import Menu from '../ui/Menu';
import ListItemAnchor from '../ui/ListItemAnchor';
//Icons
import {
	CgMenu,
} from 'react-icons/cg';
import {
	FiSettings,
} from 'react-icons/fi';
import {
	BsClockHistory,
	BsMoon,
	BsSun,
} from 'react-icons/bs';
import {
	PiFlagBanner,
} from 'react-icons/pi';
import {
	VscReport,
} from 'react-icons/vsc';
import ReportButton from './_ReportButton';
import ListItem from '../ui/ListItem';


//Main component content
const MoreOptions = (): JSX.Element => {

	//React
	const [ isOpen, { open, close, toggle } ] = useDisclosure();


	//Main component render
	return (
		<div
			className='relative'
		>
			<button
				className='relative w-full flex items-center gap-2 px-2 py-1.5 hover:bg-neutral-100 rounded-md h-11'
				onClick={toggle}
			>
				<CgMenu
					className='text-xl'
				/>
				<span>
					More
				</span>
			</button>
			{ isOpen && (
				<Menu
					className={`absolute bottom-14`}
					onMouseLeave={close}
				>
					<ListItemAnchor
						href='/settings'
						icon={<FiSettings />}
						disableActiveIcon
					>
						Settings
					</ListItemAnchor>
					<ListItemAnchor
						href='/activity'
						icon={<BsClockHistory />}
						disableActiveIcon
					>
						Your activity
					</ListItemAnchor>
					<ListItemAnchor
						href='/saved'
						icon={<PiFlagBanner />}
						disableActiveIcon
					>
						Saved
					</ListItemAnchor>
					<ListItem
						icon={<BsMoon />}
					>
						Change theme
					</ListItem>
					<ReportButton />
					<hr
						className='border-8-t-neutral-400 pt-2 mt-2'
					/>
				</Menu>
			) }
		</div>
	);
};


export default MoreOptions; //Export main component
