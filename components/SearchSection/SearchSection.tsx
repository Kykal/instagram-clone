//Components
import SearchInput from "../SearchInput";
import History from "./_History";


//Main component content
const SearchSection = (): JSX.Element => {
	//Main component render
	return (
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
				<History />
			</main>
		</section>
	);
};


export default SearchSection; //Export main component
