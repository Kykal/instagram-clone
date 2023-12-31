//React
import { createPortal } from "react-dom";


//Layouts
import NavBarSection from "@/layouts/NavBarSection";


//Components
import SearchInput from "../SearchInput";
import History from "./_History";


//Main component content
const SearchSection = (): JSX.Element => {
	//Main component render
	return (
		<>
			{typeof window !== "undefined" && createPortal(
				<NavBarSection>
					<header
						className='px-6 pt-6 pb-4 flex flex-col gap-4 border-b border-neutral-200 dark:border-neutral-800 dark:bg-black'
					>
						<h1
							className='font-bold text-2xl'
						>
							Search
						</h1>
						<SearchInput />
					</header>
					<main
						className='flex flex-col gap-4'
					>
						<div
							className='flex justify-between items-center px-6 pt-6'
						>
							<span
								className='text-md font-medium'
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
				</NavBarSection>,
				document.body,
			)}
		</>
	);
};


export default SearchSection; //Export main component
