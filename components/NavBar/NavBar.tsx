//NextJS
'use client';



//React
import { useState } from "react";


//Components
import MobileNavBar from "./_MobileNavBar";
import TabletNavBar from "./_TabletNavBar";
import SearchInput from "../SearchInput";
import SearchResult from "./SearchResult";


//Main component content
const NavBar = (): JSX.Element => {

	//React
	const [ activeItem, setActiveItem ] = useState<string>('');


	//Handlers
	const setItemHandler = (item: string) => {
		if( activeItem === item ){
			setActiveItem('');
			return;
		}

		setActiveItem(item);
	};

	//Main component render
	return (
		<>
			<MobileNavBar />
			<TabletNavBar
				setItem={setItemHandler}
				activeItem={activeItem}
			/>
			{activeItem === 'search' && (
				<SearchActiveItemSection />
			)}
			{activeItem === 'notifications' && (
				<NotificationsActiveItemSection />
			)}
		</>
	);
};


export default NavBar; //Export main component



const SearchActiveItemSection = () => {
	return(
		<section
			className='absolute left-20 flex flex-col h-screen top-0 border-r border-neutral-200 rounded-r-md w-96 bg-white'
		>
			<header
				className='px-6 pt-6 pb-4 flex flex-col gap-4 border-b border-neutral-200'
			>
				<h1
					className='font-bold text-2xl'
				>
					Search
				</h1>
				<SearchInput
					className='h-10'
				/>
			</header>
			<main
				className='flex flex-col gap-4'
			>
				<div
					className='flex justify-between items-center px-6 pt-6'
				>
					<span
						className='text-md font-semibold'
					>
						Recent
					</span>
					<button
						className='font-bold text-cyan-500 hover:text-black text-sm'
					>
						Clear all
					</button>
				</div>
				<SearchResult
					username='kykal'
					followers={239}
					name='Alan Benavides'
					imageUrl='https://avatars.githubusercontent.com/u/54295964?v=4'
					hasStories={true}
				/>
			</main>
		</section>
	);
}


const NotificationsActiveItemSection = () => {
	return(
		<section
			className='absolute left-20 flex flex-col h-screen top-0 border-r border-neutral-200 rounded-r-md w-96 bg-white'
		>
			<header
				className='px-6 pt-6 pb-4 flex flex-col gap-4'
			>
				<h1
					className='font-bold text-2xl'
				>
					Notifications
				</h1>
			</header>
			<main
				className='p-6 flex flex-col gap-4'
			>
				<div>
					<span
						className='text-md font-semibold'
					>
						Today
					</span>
					<div
						className='grow'
					>
						a
					</div>
				</div>
			</main>
		</section>
	);
}