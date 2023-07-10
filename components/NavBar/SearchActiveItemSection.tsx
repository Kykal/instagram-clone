//React
import { useState, useEffect } from 'react';


//Components
import SearchInput from "../SearchInput";
import SearchResult from "./SearchResult";


//Main component content
const SearchActiveItemSection = (): JSX.Element => {
	//Main component render
	return(
		<section
			className='hidden absolute left-20 sm:flex flex-col h-screen top-0 border-r border-neutral-200 rounded-r-md w-96 bg-white'
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
				<SearchHistory />
			</main>
		</section>
	);
};


export default SearchActiveItemSection; //Export main component



const SearchHistory = () => {

	//React
	const [ display, setDisplay ] = useState<boolean>(false);


	useEffect( () => {
		const unsub = setTimeout( () => {
			setDisplay(true);
		}, 500 );


		return () => clearTimeout(unsub);
	} );

	//If it's "loading", show skeletons
	if( !display ){
		return(
			<>
				{[...Array(5)].map( (_, index) => (
					<div
						key={`search-skeleton-${index}`}
						className='px-6 py-2 flex items-center h-16 gap-2'
					>
						<div
							className='bg-neutral-200 h-full aspect-square animate-pulse rounded-full'
						/>
						<div
							className='grow flex flex-col gap-2'
						>
							<div
								className='bg-neutral-200 h-5 w-full animate-pulse rounded-full'
							/>
							<div
								className='bg-neutral-200 h-5 w-full animate-pulse rounded-full'
							/>
						</div>
					</div>
				) )}
			</>
		);
	}

	return(
		<SearchResult
			username='kykal'
			followers={239}
			name='Alan Benavides'
			imageUrl='https://avatars.githubusercontent.com/u/54295964?v=4'
			hasStories={true}
		/>
	);
}
