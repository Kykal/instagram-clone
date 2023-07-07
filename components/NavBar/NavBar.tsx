//NextJS
'use client';


//React
import { useState } from "react";


//Components
import MobileNavBar from "./_MobileNavBar";
import TabletNavBar from "./_TabletNavBar";
import SearchInput from "../SearchInput";


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
				<section
					className='absolute left-20 flex flex-col h-screen top-0 border-r border-neutral-200 rounded-r-md w-96 bg-white'
				>
					<header
						className='px-6 pt-6 pb-4 flex flex-col gap-4 border-b border-neutral-200 '
					>
						<h1
							className='font-bold text-2xl'
						>
							Buscar
						</h1>
						<SearchInput
							className='h-10'
						/>
					</header>
					<main
						className='p-6 flex flex-col gap-4'
					>
						<span
							className='text-md font-semibold'
						>
							Recent
						</span>
						<div
							className='grow'
						>
							a
						</div>
					</main>
				</section>
			)}
		</>
	);
};


export default NavBar; //Export main component
