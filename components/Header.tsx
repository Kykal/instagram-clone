//NextJS
'use client';


//React
import { ChangeEvent, useState } from "react";


//MATERIAL DESIGN
//Components
import ActionIconAnchor from "./ui/ActionIconAnchor";
//Icons
import {
	BsHeart,
	BsHeartFill,
	BsSearch,
} from 'react-icons/bs';
import {
	RiPolaroid2Line,
} from 'react-icons/ri';
import {
	IoMdCloseCircle,
} from 'react-icons/io';


//Main component content
const Header = (): JSX.Element => {
	//Main component render
	return (
		<header
			className='sm:hidden absolute top-0 left-0 w-full border-b border-neutral-200 h-14 flex items-center gap-2 p-2'
		>
			<HomeActionIcon />
			<SearchBar />
			<NotificationsActionIcon />
		</header>
	);
};


export default Header; //Export main component



const HomeActionIcon = () => {
	return(
		<ActionIconAnchor
			href='/'
			disableActiveIcon
		>
			<RiPolaroid2Line className='text-xl' />
		</ActionIconAnchor>
	);
}


const SearchBar = () => {

	//React
	const [ value, setValue ] = useState<string>('');


	//Handlers
	const valueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const cleanValueHandler = () => {
		setValue('');
	};


	return(
		<div
			className='group rounded-md bg-neutral-100 grow flex items-center h-full gap-1'
		>
			<div
				className='flex items-center justify-center h-full aspect-square'
			>
				<BsSearch
					className='text-neutral-400 text-md'
				/>
			</div>
			<input
				type="text"
				className='w-full h-full grow bg-transparent outline-none'

				value={value}
				onChange={valueHandler}
			/>
			<button
				className='flex items-center justify-center h-full aspect-square'
			>
				<IoMdCloseCircle
					className='text-neutral-400 text-lg'
					onClick={cleanValueHandler}
				/>
			</button>
		</div>
	);
}


const NotificationsActionIcon = () => {
	return(
		<ActionIconAnchor
			href='/notifications'
			activeIcon={<BsHeartFill className='text-xl' />}
		>
			<BsHeart className='text-xl' />
		</ActionIconAnchor>
	);
}
